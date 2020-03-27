# README

## chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Asociation
- has_many :groups
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|messages_id|integer|null: false, foreign_key: true|
### Asociation
- has_many :messages
- has_many :users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Asociation
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Asociation
- belongs_to :user
- belongs_to :group