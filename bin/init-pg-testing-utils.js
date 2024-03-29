#!/usr/bin/env node

var http = require('http'),
    fs = require('fs');

var platform = process.platform,
    downloadDir = __dirname + '/downloads/',
    wiremockJarPath = 'http://repo1.maven.org/maven2/com/github/tomakehurst/wiremock/1.55/',
    wiremockJarFileName = 'wiremock-1.55-standalone.jar';

var wiremockJarFileAbsolute = downloadDir + wiremockJarFileName;

if (!fs.existsSync(wiremockJarFileAbsolute)) {
    console.log('Downloading: ' + wiremockJarPath + wiremockJarFileName);
    http.get(wiremockJarPath + wiremockJarFileName, function (response) {
        if (!fs.existsSync(downloadDir)) {
            fs.mkdirSync(downloadDir);
        }
        var file = fs.createWriteStream(wiremockJarFileAbsolute);
        response.pipe(file);
    });
} else {
    console.log(wiremockJarFileName + ' is already installed, so no need to download it.');
}