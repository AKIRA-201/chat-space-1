== README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Please feel free to use a different markup language if you do not plan to run
<tt>rake doc:app</tt>.

## membersテーブル

|Column|Type|Options|
|user_id|integer|null: false, foreign_key: true, index: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Options|
|name|string|null: false, index: true|
|email|string|null: false, |

### Association
- has_many :messages
- has_many :members

## groupsテーブル
|Column|Type|Options|
|group|string|Options|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :members

## messagesテーブル
|Column|Type|Options|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :groups
- belongs_to :users

