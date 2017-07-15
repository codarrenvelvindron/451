# 451 - Browser extension
![451_Logo(PNG)](https://raw.githubusercontent.com/codarrenvelvindron/451/master/icons/451/icon_128.png)

## Project and Goals:

### Champions: 
Niels ten Oever (ARTICLE 19), dkg (ACLU), Joe Hall (CDT)
### Background: 
HTTP error code 451 (RFC7725) is an error code to report legal obstacles for serving a webpage. During the hackathon we will focus on implementing and measuring this status code to make censorship more transparent.
### Purpose: 
As part of ietf99, a browser plugin which would report to the user, and optionally to the webcrawler, cases of HTTP error code 451

Official Page: https://www.ietf.org/registration/MeetingWiki/wiki/99hackathon

## Download
### Firefox: Not published yet
### Chrome: Not published yet
### Opera: Not published yet

## Installation/Testing instructions
1. "Download Zip" from Github repository
2. Load as unpacked extension in your extension page
3. http 451 will check current tab's url for censorship with an indication
4. Sample websites to test:
https://github.com/adadgio/safari-reader-js

## Changelog
### 1.0.6
* http 451 now updates on currently active Tab
* Removed popup
* Removed non-needed permissions

### 1.0.5
* Added different icons for status codes
* Black for no 451 and Red for 451

### 1.0.4
* Removed click button to check
* Extension now grabs current page and checks for 451

### 1.0.3
* Added specific check for 451
* Extension now gives output to user in cases of censorship

### 1.0.2
* Polishing some logo designs

### 1.0.1 
* Basic check functionality for websites

### 1.0.0
* Logos drafted

