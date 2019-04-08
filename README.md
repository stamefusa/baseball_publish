## ネット対戦野球盤
送信部分のコード。  
`public/`以下にあるHTMLファイルにアクセスし、ボタン押下で同じアプリケーション上のAPIをコールする。  
APIはAWS SQSへメッセージを送信する。APIは`routes/api.js`に実装している。

## ローカルでの実行
AWSの認証情報を下記に保存する。
```
$ cat baseball_publish/config.json
{ "accessKeyId": "***", "secretAccessKey": "***"}
```
HTML中のAPIのURLを`http://localhost:3000`にする。

## Herokuでの実行
アプリケーション作成時
```
$ heroku login
$ heroku create
```

Herokuで実行するときは環境変数に下記の値を入れる
* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY
