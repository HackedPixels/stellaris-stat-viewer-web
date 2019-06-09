#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include "convert.h"

struct CGI_Data {
	char* var;
	char* val;
	struct CGI_Data* next;
};

char* getdata(void);
struct CGI_Data* create_cgi_list(char*);
