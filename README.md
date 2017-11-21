# gatsby-remark-image-prefix-bug
[demo](http://vibertthio.com/gatsby-remark-image-prefix-bug/)

<br><br>

## dev in local: work
![](./assets/screenshots/dev-console.png)
![](./assets/screenshots/local-work.png)

<br><br>

## deploy to gh-pages: wrong prefix
![](./assets/screenshots/deploy-console.png)
![](./assets/screenshots/gh-page-error.png)

<br><br>


## deploy after clean cache: work
![](./assets/screenshots/clean-cache-console.png)
![](./assets/screenshots/clean-cache-work.png)

<br><br>

## other evidence

After deploying to the gh-pages, I can only find the url without prefix in the cache folder.
Therefore, I think the wrong url of images in markdown of deployment comes from cache.
![](./assets/screenshots/url-in-cache.png)
