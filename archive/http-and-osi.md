

### 7 Layers of the OSI Model

> Open System Interconnection (OSI) defines a networking framework to implement protocols in 7 layers developed by ISO

https://www.webopedia.com/quick_ref/OSI_Layers.asp

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/7-layers-of-osi.jpg"/>
</p>

- layer 7 = Application
  - provides services for file transfer (ex. ftp, http, ...etc)

- layer 6 = Presentation
  - transforms data into a form that the application layer can accept

- layer 5 = Session
  - manages connections between application

- layer 4 = Transport
  - responsible for end-to-end flow and ensures complete data transfer

- layer 3 = Network
  - creates logical path (virtual circuits) for transmitting data
  - does internetworking, congestion control and packet sequencing

- layer 2 = Data Link
  - encode and decode data packets into bits

- layer 1 = Physical
  - hardware means of sending and receiving data

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/icmp-packet-structure.png"/>
</p>

> sample image of a packet

### How HTTP request works

> This article describes how browsers perform page requests using the HTTP/1.1 protocol

https://flaviocopes.com/http-request/

- Analyze URL Requests

- DNS Lookup Phase

- Get host by Name

- TCP Request Handshaking

- Sending the Request