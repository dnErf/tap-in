### Examples of System Architecture and Design

#### Dropbox ( early 2012 )
https://www.youtube.com/watch?v=PE4gwstWhmc

- notification server 
  - pings the clients every time there is a change
- meta server
  - keeps track of metadata
- block server
  - handles upload and download of the data
- Tech Stack
  - Python
  - MySQL 
  - MemCached
  - AWS S3

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/sad-dropbox-1.jpg"/>
</p>

#### Instagram ( 2017 )
https://www.youtube.com/watch?v=hnpzNAPiC0E&list=WL&index=80&t=0s

- Tech Stack
  - Django
  - Cassandra
    - user feeds, activies etc
    - write 2 ; read 1
  - PostgreSQL
    - user , media , friendship etc
  - MemCached
  - RabbitMQ
  - Celery
  - AsyncIO

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/sad-instagram-1.jpg"/>
</p>

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/sad-instagram-2.jpg"/>
</p>

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/sad-instagram-3.jpg"/>
</p>

#### Slack ( 2017 )
https://www.youtube.com/watch?v=WE9c9AZe-DY

- Tech Stack
  - LAMP
  - WebSockets
  - Redis

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/sad-slack-1.jpg"/>
</p>

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/sad-slack-2.jpg"/>
</p>