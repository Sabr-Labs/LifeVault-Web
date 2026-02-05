/**
 * Simple runtime tests for the release utilities
 * Run with: npm run dev (and check browser console)
 */

import { joinUrl } from './utils/release';

// Test URL joining
console.group('🧪 Testing joinUrl utility');

const tests = [
  { 
    base: 'https://example.com', 
    path: 'file.exe', 
    expected: 'https://example.com/file.exe' 
  },
  { 
    base: 'https://example.com/', 
    path: 'file.exe', 
    expected: 'https://example.com/file.exe' 
  },
  { 
    base: 'https://example.com', 
    path: '/file.exe', 
    expected: 'https://example.com/file.exe' 
  },
  { 
    base: 'https://example.com/', 
    path: '/file.exe', 
    expected: 'https://example.com/file.exe' 
  },
  { 
    base: 'https://example.com/base', 
    path: 'path/to/file.exe', 
    expected: 'https://example.com/base/path/to/file.exe' 
  },
  { 
    base: 'https://example.com', 
    path: '', 
    expected: 'https://example.com' 
  },
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
  const result = joinUrl(test.base, test.path);
  const success = result === test.expected;
  
  if (success) {
    console.log(`✅ Test ${index + 1}: PASSED`);
    passed++;
  } else {
    console.error(`❌ Test ${index + 1}: FAILED`);
    console.error(`   Expected: ${test.expected}`);
    console.error(`   Got:      ${result}`);
    failed++;
  }
});

console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
console.groupEnd();
