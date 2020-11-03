# Truco Live - Project Scope

## Project Scope
In the following paragraphs you will find the scope of this project, its main features and the basic architecture that will be implemented during development.

### Basics
This app will use WebRTC to comunicate audio/video and data through every player. The only servers used for this app to work properly will be a TURN/STUN instance for NAT traversal.

Finally, a No-SQL database and a minimun REST API may be used to handle the game room logic. The recommendation here is to use AWS services (DynamoDB - Lambda - API Gateway)

## Features
The next table shows the main features that this applications should have:

| Feature                  | Description                                                            |
| ------------------------ |:-----------------------------------------------------------------------|
| Authentication           | This app does not have a login service                                 |
| P2P                      | This app does not use any server to handle the media Streams           |
| Media Device Selection   | Every player can select their prefered media devices                   |
| Play Room                | Every participant can create/join a room with unique id and password   |
| 4 Players                | 4 Players max to guarantee a good P2P experience                       |
| Automatic deck handling  | the game order is handled by the application                           |
| Manual team selection    | Create a Menu so the players can select teams                          |
| Auto team selection      | The app should have an option to automatically select the teammates    |

## Architecture
The architecture for this project is very simple. So far, it is an SPA that uses the MediaDevices API.
The app can be hosted in an S3 bucket with CDN to provide high availability. There is no need of load balancers because there is no server-side operations
in the application.

The interaction with the Database when the project arrives to that end, will be handled in a serverless way.

## Technology Stack
We will use Lit-Element framework to develop custom web-components for this app

- HTML
- CSS
- Lit-Element
- WebRTC
