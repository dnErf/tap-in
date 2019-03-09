### Examples of System Architecture and Design

#### Dropbox ( early 2012 )

- notification server 
  - pings the clients every time there is a change
- meta server
  - keeps track of metadata
- block server
  - handles upload and download of the data

#### Tech Stack

- Python
- MySQL 
- MemCached
- AWS S3

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/sad-dropbox-1.jpg"/>
</p>