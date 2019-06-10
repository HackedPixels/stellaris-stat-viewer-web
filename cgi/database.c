#include "database.h"

int
newfile(name, content)
	char* name;
	char** content;
{
	FILE* f;
	char* s;

	f = fopen(name, "a");
	if (f == NULL)
	{
		f = fopen(name, "w");
		if (f == NULL)
		{
			return 1;
		}
	}

	s = strtok(*content, "\n");
	while (s != NULL)
	{
		fprintf(f, "%s\n", s);
		s = strtok(NULL, "\n");
	}

	return 0;
}

int
getfile(name)
	char* name;
{
	char buf[1024];
	FILE *file;
	size_t nread;

	file = fopen(name, "r");
	if (file)
	{
		while ((nread = fread(buf, 1, sizeof buf, file)) > 0)
		fwrite(buf, 1, nread, stdout);
		if (ferror(file))
		{
			/* deal with error */
		}
		fclose(file);
	}
}

int
delfile(name)
	char* name;
{
	if (remove(name) == 0)
	{
		return 0;
	} else {
		return 1;
	}
}
