#!/usr/bin/env node 
const program = require('commander');
const colors = require('colors');
const request = require('../lib');
const log = console.log;

program
    // .allowUnknownOption()//不报错误
    .version('0.0.1')
    .usage('这是我的网络爬虫程序😎'
      +'\n  grap [option]'
      +'\n    bd baidu: baidu search'
      +'\n    zh zhihu: zhihu search');

program
    .command('baidu <cmd>')
    .alias('bd')
    .description('baidu search baidu')
    .option("-t, --tieba", "baidu tieba")
    .action(function(cmd, options){
      console.log('baidu search "%s":', cmd);
      request.baiduSearch(cmd);
    }).on('--help', function() {
      console.log('  Examples:');
      console.log();
      console.log('    grab bd    <cmd>');
      console.log('    grab baidu <cmd>');
      console.log();
    });
program
    .command('tiku <cmd>')
    .alias('tk')
    .description('tiku search baidu')
    .option("-t, --tiku", "tiku")
    .action(function(cmd, options){
      console.log('tiku search "%s":', cmd);
      request.baiduSearch(cmd);
    }).on('--help', function() {
      console.log('  Examples:');
      console.log();
      console.log('    grab tiku    <cmd>');
      console.log();
    });		

program
    .command('zhihu <cmd>')
    .alias('zh')
    .description('search zhihu')
    .action(function(cmd, options){
      console.log('zhihu search "%s":', cmd);
      request.zhihuSearch(cmd);
    }).on('--help', function() {
      console.log('  Examples:');
      console.log();
      console.log('    grab zh    <cmd>');
      console.log('    grab zhihu <cmd>');
      console.log();
    });

program.parse(process.argv);

// log(' args: %j', program.args);

if (!process.argv.slice(2).length) {
  program.outputHelp(make_red);
}

function make_red(txt) {
  return colors.red(txt); //display the help text in red on the console
}
