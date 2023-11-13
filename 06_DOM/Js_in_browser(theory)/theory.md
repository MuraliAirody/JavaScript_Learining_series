
## Script tag

#### script tag used to insert script inside the HTML page, with the help of script tag '\<script>\</script>' able to insert external and also inter js code also 

### Advantage of having separate script file and using it inside the html page by using 'scr' attribute of '\<script>\</script>' tag

1. separation of concern (readability of code increases)
2. Browser caching (the browser will load the script file only once; even if it is commented down after the load, it will store the file inside the cache and increase the response speed).

Note: if the both internal and external script present at a time, script tag only consider external script ('src') which have higher priority.