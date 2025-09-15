#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, rmSync, cpSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting FixMyGadget deployment...\n');

// Function to run command and log output
function runCommand(command, cwd = __dirname) {
    console.log(`📝 Running: ${command}`);
    try {
        const output = execSync(command, { 
            cwd, 
            stdio: 'inherit',
            encoding: 'utf8' 
        });
        return output;
    } catch (error) {
        console.error(`❌ Error executing: ${command}`);
        console.error(error.message);
        process.exit(1);
    }
}

// Step 1: Install and build frontend
console.log('📦 Step 1: Installing frontend dependencies...');
const frontendPath = join(__dirname, 'frontend-web');
runCommand('npm install', frontendPath);

console.log('🔨 Step 2: Building frontend...');
runCommand('npm run build', frontendPath);

// Step 2: Copy dist to backend
console.log('📂 Step 3: Copying frontend build to backend...');
const distPath = join(frontendPath, 'dist');
const backendPath = join(__dirname, 'backend');
const backendDistPath = join(backendPath, 'dist');

// Remove existing dist in backend if it exists
if (existsSync(backendDistPath)) {
    rmSync(backendDistPath, { recursive: true, force: true });
}

// Copy the entire dist folder to backend
cpSync(distPath, backendDistPath, { recursive: true });

// Also copy index.html to backend root for serving at /
const indexSrc = join(distPath, 'index.html');
const indexDest = join(backendPath, 'index.html');
cpSync(indexSrc, indexDest);

console.log('📁 Step 4: Installing backend dependencies...');
process.env.PUPPETEER_SKIP_DOWNLOAD = 'true';
runCommand('npm install', backendPath);

console.log('✅ Deployment completed successfully!');
console.log('\n🎯 To start the application:');
console.log('   cd backend');
console.log('   npm start');
console.log('\n📖 The frontend will be served from the backend at http://localhost:3000');