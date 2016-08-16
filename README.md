When you want to be fast, you have to give up the things slowing you down.
I used following grunt tasks to optimize my css

grunt-uncss
grunt-contrib-cssmin
grunt-uncss-  This task removes unused CSS from a project, so it reduces the size of the final CSS file, and thus improves the download time. It’s particularly well suited if you’re developing using a framework like Boostrap or Foundation.

To compare how much it affect the size. I have used grunt-compare-size along with grunt-uncss in my test project.


grunt-contrib-cssmin - It compresses css files. We can give source file path, from where to take file which needs to be compressed, also we can skip few files which is already compressed or we don't want to compress by adding (!) with the file name or folder name  and we can add destination path and file name where to put the compressed file.


So basically, 1st we will remove unused css using grunt-uncss and then we will compress it using grunt-contrib-cssmin to reduce the overall css files size.



Following are the reference links:

http://deanhume.com/home/blogpost/automatically-removing-unused-css-using-grunt/6101

https://davidwalsh.name/uncss

https://www.npmjs.com/package/grunt-contrib-cssmin
