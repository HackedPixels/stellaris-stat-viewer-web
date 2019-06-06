# Stellaris Stat Viewer (Web)
![VERSION](https://img.shields.io/badge/version-0.0-blue.svg) ![STABLE](https://img.shields.io/badge/stable-no-red.svg) [![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

 <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

This is a web frontend for [ArdiMaster Stat Viewer](https://github.com/ArdiMaster/Stellaris-Stat-Viewer).

This does not add any new features, rather it tries to make it more
easy-to-use (tm) and cross-plattform.

## Works-in:
| | version | works|
|-|-|-|
| Firefox | 64.0| &#x2713; |
| Chromium| 73.0| &#x2713; |

## How to host your own:
1. Clone this project
2. `cd` into the projectfolder/docker
   ```bash
   $ cd stellaris-stat-viewer/docker/```
3. build the provided image
   ```bash
   $ docker build -t thttp .```
4. start the ctl script and type start
   ```bash
   $ bash ctl.sh
   .start
   14567.
   ```

<div class="w3-panel w3-pale-red w3-leftbar w3-border-red">
    <h5>WARNING!</h5>
    <p>When cloning the project and not setting the <code>HOSTWEB</code>
    Variable, the script will scream at you.</p>
</div>
