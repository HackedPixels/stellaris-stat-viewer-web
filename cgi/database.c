#include "database.h"

#define MAX_PAIRS 10

int
main(argc, argv)
	int argc;
	char** argv;
{
	char* str;
	struct CGI_Data* cgi, *free_cgi;

	str = getdata();
	if (str == NULL)
		return 1;
	hex2ascii(str);

	cgi = create_cgi_list(str);
	free_cgi = cgi;
	if (cgi == NULL)
		return 1;
	while (cgi->next != NULL) {
		printf("%s -> %s\n", cgi->var, cgi->val);
		cgi = cgi->next;
	}

	return 0;
}

struct CGI_Data*
create_cgi_list(url)
	char* url;
{
	char* s;
	char* res;

	char* pairs[MAX_PAIRS];
	struct CGI_Data* ptr_data  = NULL;
	struct CGI_Data* ptr_start = NULL;
	int i = 0, j = 0;

	res = strtok(s, "&");
	while (res != NULL && i < MAX_PAIRS)
	{
		pairs[i] = (char*) malloc(strlen(res)+1);
		if (pairs[i] == NULL)
			return NULL;
		pairs[i] = res;
		res = strtok(NULL, "&");
		i++;
	}

	while (i > j)
	{
		/* first element? */
		if (ptr_start == NULL)
		{
			ptr_start = (struct CGI_Data*)
				malloc(sizeof(struct CGI_Data*));
			if (ptr_start == NULL)
				return NULL;

			res = strtok(pairs[j], "=");
			ptr_start->var = res;
			res = strtok(NULL, "\0");
			ptr_start->val = malloc(strlen(res)+1);

			if (ptr_start->val == NULL)
				return NULL;
			ptr_start->val = res;

			ptr_start->next = malloc(sizeof(struct CGI_Data*));
			if (ptr_start->next == NULL)
				return NULL;
			ptr_data = ptr_start->next;
			j++;
		/* the rest */
		} else {
			res = strtok(pairs[j], "=");
			ptr_data->var = malloc(strlen(res)+1);
			if (ptr_data->var == NULL)
				return NULL;

			ptr_data->var = res;
			res = strtok(NULL, "\0");
			ptr_data->val = malloc(strlen(res)+1);
			if (ptr_data->val == NULL)
				return NULL;
			ptr_data->val = res;

			ptr_data->next = malloc(sizeof(struct CGI_Data*));
			if (ptr_data->next == NULL)
				return NULL;
			ptr_data = ptr_data->next;
			j++;
		}
	}
	return ptr_start;
}

/* Gets data from a HTTP request. */
char*
getdata(void)
{
	unsigned long size;
	char* buffer, *cgi_string;
	char* request;
	char* cont_len;

	/* Get request type. */
	request = getenv("REQUEST_METHOD");

	/* request-type defined? */
	if (request == NULL)
	{
		return NULL;
	/* is a GET request? */
	} else if (strcmp(request, "GET") == 0)
	{
		cgi_string = getenv("QUERY_STRING");
		return (cgi_string == NULL ? NULL : strdup(cgi_string));
	} else if (strcmp(request, "POST") == 0) {
		// TODO: implement post method
		/* unknown method. */
	} else {
		return NULL;
	}
}
