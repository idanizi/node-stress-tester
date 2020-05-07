# node-stress-tester
tests stress requests per seconds over some api

## Gettig Started
```
npm i
npm start
```

> note: you may need to `sudo chwon $USER:$USER...` depending on your OS. please follow the stdout warnings if happends.

## Examples

Use [pm2 cli](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/):

Workers running:

![image](https://user-images.githubusercontent.com/9889268/81287069-d0121300-906a-11ea-99b1-369745b80a3f.png)


Client's send requests per second:

![image](https://user-images.githubusercontent.com/9889268/81287335-4282f300-906b-11ea-8654-4b96dc85482e.png)


Server's recieves requests per second:

![image](https://user-images.githubusercontent.com/9889268/81287403-5fb7c180-906b-11ea-8993-60fdc3d9c776.png)


### Scale up more client workers
(depends on your machine's number of cpu cores limit!) use `nproc` to find out how many you have


Here is how you add 3 more client workers:
```
pm2 scale client +3
```

## Author
Idan Izicovich
