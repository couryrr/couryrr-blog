# Set project directory 
PROJDIR := ${realpath ${CURDIR}/}
SOURCEDIR := ${PROJDIR}/cmd
BUILDDIR := ${PROJDIR}/bin/build


%:
	go build -o ${BUILDDIR}/$@ ${SOURCEDIR}/$@/main.go

clean: 
	rm -rf bin