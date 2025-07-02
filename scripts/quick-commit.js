#!/usr/bin/env node

import { execSync } from 'child_process';

// Get commit message from command line argument or prompt user
const args = process.argv.slice(2);
let commitMessage = args.join(' ');

if (!commitMessage) {
  console.log('请输入提交信息:');
  commitMessage = require('readline-sync').question('Commit message: ');
}

if (!commitMessage) {
  console.error('错误: 提交信息不能为空');
  process.exit(1);
}

try {
  console.log('正在添加文件...');
  execSync('git add .', { stdio: 'inherit' });

  console.log('正在提交...');
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

  console.log('正在推送到GitHub...');
  execSync('git push origin main', { stdio: 'inherit' });

  console.log('✅ 成功提交并推送!');
} catch (error) {
  console.error('❌ Git操作失败:', error.message);
  process.exit(1);
}
