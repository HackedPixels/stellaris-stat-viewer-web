# How to use the images:

## build
Build a working (tm) copy of the stellaris stat viewer
Run it like this:
```bash
$ TARGET_BINARY=$HOME/stellaris-stats/
$ cd stellaris-stat-viewer-web/docker/build
$ docker build -t stellaris-build .
$ docker run --rm --mount src=$TARGET_BINARY,target=/outport/,type=bind -t stellaris-build
```

**NOTE on windows**
Skip the first skip and run this instead:
```powershell
cd /PATH/TO/YOUR/BINARY/FOLDER
$TARGET_BINARY = Get-Location
$TARGET_BINARY = $TARGET_BINARY.path
```
---
## host
How to host your own:
1. Clone this project
2. `cd` into the projectfolder/docker
   ```bash
   $ cd stellaris-stat-viewer/docker/
   ```
3. build the provided image
   ```bash
   $ docker build -t thttp .
   ```
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
