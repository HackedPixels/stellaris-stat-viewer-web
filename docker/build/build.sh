# get the source code.
get.sh

cd stellaris-stat-viewer
mkdir build && cd build
# edit CMakeLists and remove -WimplicitFallthrough
ed ../CMakeLists.txt << EOF
/Wimplicit-fallthrough
d
w
q
EOF
cmake ..
make
mv * /outport/
