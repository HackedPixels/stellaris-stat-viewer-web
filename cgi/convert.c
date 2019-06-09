#include "convert.h"

void
hex2ascii(str)
	char* str;
{
	int x, y;

	for (x = 0, y = 0; str[y] != '\0'; x++, y++)
	{
		str[x] = str[y];
		/* hex? */
		str[x] = (str[x] == '%' ? (
			y += 2, convert(&str[y+1])
		) : (str[x] == '+' ? (
			str[x] = ' '
		) : (
			str[x] = str[x]
		)));
	}
	str[x] = '\0';
}

char
convert(hex)
	char* hex;
{
	char ascii;

	ascii  = (hex[0] >= 'A' ? ((hex[0] & 0xdf) - 'A')+10 : (hex[0] - '0')) << 4;
	ascii += (hex[0] >= 'A' ? ((hex[1] & 0xdf) - 'A')+10 : (hex[1] - '0'));
	return ascii;
}
