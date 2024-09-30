/*
* code generated with arith_eq_gen.js
* equation: s*x2-s*x1-y2+y1-p*q0+p*offset
* 
* p=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f
* offset=0x20000000000000000000000000000000000000000000000000000000000000000
*/

module.exports.calculate = function (p, step, _o)
{
	switch(step) {
		case 0: return (
			(p.s[0][_o]   * p.x2[0][_o]  - p.s[0][_o]   * p.x1[0][_o]  - 0xfc2fn  * p.q0[0][_o] )
			 - p.y2[0][_o]  + p.y1[0][_o] );

		case 1: return (
			(p.s[0][_o]   * p.x2[1][_o]  - p.s[0][_o]   * p.x1[1][_o]  - 0xfc2fn  * p.q0[1][_o] ) +
			(p.s[1][_o]   * p.x2[0][_o]  - p.s[1][_o]   * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[1][_o]  + p.y1[1][_o] );

		case 2: return (
			(p.s[0][_o]   * p.x2[2][_o]  - p.s[0][_o]   * p.x1[2][_o]  - 0xfc2fn  * p.q0[2][_o] ) +
			(p.s[1][_o]   * p.x2[1][_o]  - p.s[1][_o]   * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[2][_o]   * p.x2[0][_o]  - p.s[2][_o]   * p.x1[0][_o]  - 0xfffen  * p.q0[0][_o] )
			 - p.y2[2][_o]  + p.y1[2][_o] );

		case 3: return (
			(p.s[0][_o]   * p.x2[3][_o]  - p.s[0][_o]   * p.x1[3][_o]  - 0xfc2fn  * p.q0[3][_o] ) +
			(p.s[1][_o]   * p.x2[2][_o]  - p.s[1][_o]   * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[2][_o]   * p.x2[1][_o]  - p.s[2][_o]   * p.x1[1][_o]  - 0xfffen  * p.q0[1][_o] ) +
			(p.s[3][_o]   * p.x2[0][_o]  - p.s[3][_o]   * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[3][_o]  + p.y1[3][_o] );

		case 4: return (
			(p.s[0][_o]   * p.x2[4][_o]  - p.s[0][_o]   * p.x1[4][_o]  - 0xfc2fn  * p.q0[4][_o] ) +
			(p.s[1][_o]   * p.x2[3][_o]  - p.s[1][_o]   * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[2][_o]   * p.x2[2][_o]  - p.s[2][_o]   * p.x1[2][_o]  - 0xfffen  * p.q0[2][_o] ) +
			(p.s[3][_o]   * p.x2[1][_o]  - p.s[3][_o]   * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[4][_o]   * p.x2[0][_o]  - p.s[4][_o]   * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[4][_o]  + p.y1[4][_o] );

		case 5: return (
			(p.s[0][_o]   * p.x2[5][_o]  - p.s[0][_o]   * p.x1[5][_o]  - 0xfc2fn  * p.q0[5][_o] ) +
			(p.s[1][_o]   * p.x2[4][_o]  - p.s[1][_o]   * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[2][_o]   * p.x2[3][_o]  - p.s[2][_o]   * p.x1[3][_o]  - 0xfffen  * p.q0[3][_o] ) +
			(p.s[3][_o]   * p.x2[2][_o]  - p.s[3][_o]   * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[4][_o]   * p.x2[1][_o]  - p.s[4][_o]   * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[5][_o]   * p.x2[0][_o]  - p.s[5][_o]   * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[5][_o]  + p.y1[5][_o] );

		case 6: return (
			(p.s[0][_o]   * p.x2[6][_o]  - p.s[0][_o]   * p.x1[6][_o]  - 0xfc2fn  * p.q0[6][_o] ) +
			(p.s[1][_o]   * p.x2[5][_o]  - p.s[1][_o]   * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[2][_o]   * p.x2[4][_o]  - p.s[2][_o]   * p.x1[4][_o]  - 0xfffen  * p.q0[4][_o] ) +
			(p.s[3][_o]   * p.x2[3][_o]  - p.s[3][_o]   * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[4][_o]   * p.x2[2][_o]  - p.s[4][_o]   * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[5][_o]   * p.x2[1][_o]  - p.s[5][_o]   * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[6][_o]   * p.x2[0][_o]  - p.s[6][_o]   * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[6][_o]  + p.y1[6][_o] );

		case 7: return (
			(p.s[0][_o]   * p.x2[7][_o]  - p.s[0][_o]   * p.x1[7][_o]  - 0xfc2fn  * p.q0[7][_o] ) +
			(p.s[1][_o]   * p.x2[6][_o]  - p.s[1][_o]   * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[2][_o]   * p.x2[5][_o]  - p.s[2][_o]   * p.x1[5][_o]  - 0xfffen  * p.q0[5][_o] ) +
			(p.s[3][_o]   * p.x2[4][_o]  - p.s[3][_o]   * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[4][_o]   * p.x2[3][_o]  - p.s[4][_o]   * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[5][_o]   * p.x2[2][_o]  - p.s[5][_o]   * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[6][_o]   * p.x2[1][_o]  - p.s[6][_o]   * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[7][_o]   * p.x2[0][_o]  - p.s[7][_o]   * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[7][_o]  + p.y1[7][_o] );

		case 8: return (
			(p.s[0][_o]   * p.x2[8][_o]  - p.s[0][_o]   * p.x1[8][_o]  - 0xfc2fn  * p.q0[8][_o] ) +
			(p.s[1][_o]   * p.x2[7][_o]  - p.s[1][_o]   * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[2][_o]   * p.x2[6][_o]  - p.s[2][_o]   * p.x1[6][_o]  - 0xfffen  * p.q0[6][_o] ) +
			(p.s[3][_o]   * p.x2[5][_o]  - p.s[3][_o]   * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[4][_o]   * p.x2[4][_o]  - p.s[4][_o]   * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[5][_o]   * p.x2[3][_o]  - p.s[5][_o]   * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[6][_o]   * p.x2[2][_o]  - p.s[6][_o]   * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[7][_o]   * p.x2[1][_o]  - p.s[7][_o]   * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[8][_o]   * p.x2[0][_o]  - p.s[8][_o]   * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[8][_o]  + p.y1[8][_o] );

		case 9: return (
			(p.s[0][_o]   * p.x2[9][_o]  - p.s[0][_o]   * p.x1[9][_o]  - 0xfc2fn  * p.q0[9][_o] ) +
			(p.s[1][_o]   * p.x2[8][_o]  - p.s[1][_o]   * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[2][_o]   * p.x2[7][_o]  - p.s[2][_o]   * p.x1[7][_o]  - 0xfffen  * p.q0[7][_o] ) +
			(p.s[3][_o]   * p.x2[6][_o]  - p.s[3][_o]   * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[4][_o]   * p.x2[5][_o]  - p.s[4][_o]   * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[5][_o]   * p.x2[4][_o]  - p.s[5][_o]   * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[6][_o]   * p.x2[3][_o]  - p.s[6][_o]   * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[7][_o]   * p.x2[2][_o]  - p.s[7][_o]   * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[8][_o]   * p.x2[1][_o]  - p.s[8][_o]   * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[9][_o]   * p.x2[0][_o]  - p.s[9][_o]   * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[9][_o]  + p.y1[9][_o] );

		case 10: return (
			(p.s[0][_o]   * p.x2[10][_o] - p.s[0][_o]   * p.x1[10][_o] - 0xfc2fn  * p.q0[10][_o]) +
			(p.s[1][_o]   * p.x2[9][_o]  - p.s[1][_o]   * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[2][_o]   * p.x2[8][_o]  - p.s[2][_o]   * p.x1[8][_o]  - 0xfffen  * p.q0[8][_o] ) +
			(p.s[3][_o]   * p.x2[7][_o]  - p.s[3][_o]   * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[4][_o]   * p.x2[6][_o]  - p.s[4][_o]   * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[5][_o]   * p.x2[5][_o]  - p.s[5][_o]   * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[6][_o]   * p.x2[4][_o]  - p.s[6][_o]   * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[7][_o]   * p.x2[3][_o]  - p.s[7][_o]   * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[8][_o]   * p.x2[2][_o]  - p.s[8][_o]   * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[9][_o]   * p.x2[1][_o]  - p.s[9][_o]   * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[10][_o]  * p.x2[0][_o]  - p.s[10][_o]  * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[10][_o] + p.y1[10][_o]);

		case 11: return (
			(p.s[0][_o]   * p.x2[11][_o] - p.s[0][_o]   * p.x1[11][_o] - 0xfc2fn  * p.q0[11][_o]) +
			(p.s[1][_o]   * p.x2[10][_o] - p.s[1][_o]   * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[2][_o]   * p.x2[9][_o]  - p.s[2][_o]   * p.x1[9][_o]  - 0xfffen  * p.q0[9][_o] ) +
			(p.s[3][_o]   * p.x2[8][_o]  - p.s[3][_o]   * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[4][_o]   * p.x2[7][_o]  - p.s[4][_o]   * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[5][_o]   * p.x2[6][_o]  - p.s[5][_o]   * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[6][_o]   * p.x2[5][_o]  - p.s[6][_o]   * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[7][_o]   * p.x2[4][_o]  - p.s[7][_o]   * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[8][_o]   * p.x2[3][_o]  - p.s[8][_o]   * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[9][_o]   * p.x2[2][_o]  - p.s[9][_o]   * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[10][_o]  * p.x2[1][_o]  - p.s[10][_o]  * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[11][_o]  * p.x2[0][_o]  - p.s[11][_o]  * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[11][_o] + p.y1[11][_o]);

		case 12: return (
			(p.s[0][_o]   * p.x2[12][_o] - p.s[0][_o]   * p.x1[12][_o] - 0xfc2fn  * p.q0[12][_o]) +
			(p.s[1][_o]   * p.x2[11][_o] - p.s[1][_o]   * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[2][_o]   * p.x2[10][_o] - p.s[2][_o]   * p.x1[10][_o] - 0xfffen  * p.q0[10][_o]) +
			(p.s[3][_o]   * p.x2[9][_o]  - p.s[3][_o]   * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[4][_o]   * p.x2[8][_o]  - p.s[4][_o]   * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[5][_o]   * p.x2[7][_o]  - p.s[5][_o]   * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[6][_o]   * p.x2[6][_o]  - p.s[6][_o]   * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[7][_o]   * p.x2[5][_o]  - p.s[7][_o]   * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[8][_o]   * p.x2[4][_o]  - p.s[8][_o]   * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[9][_o]   * p.x2[3][_o]  - p.s[9][_o]   * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[10][_o]  * p.x2[2][_o]  - p.s[10][_o]  * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[11][_o]  * p.x2[1][_o]  - p.s[11][_o]  * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[12][_o]  * p.x2[0][_o]  - p.s[12][_o]  * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[12][_o] + p.y1[12][_o]);

		case 13: return (
			(p.s[0][_o]   * p.x2[13][_o] - p.s[0][_o]   * p.x1[13][_o] - 0xfc2fn  * p.q0[13][_o]) +
			(p.s[1][_o]   * p.x2[12][_o] - p.s[1][_o]   * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[2][_o]   * p.x2[11][_o] - p.s[2][_o]   * p.x1[11][_o] - 0xfffen  * p.q0[11][_o]) +
			(p.s[3][_o]   * p.x2[10][_o] - p.s[3][_o]   * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[4][_o]   * p.x2[9][_o]  - p.s[4][_o]   * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[5][_o]   * p.x2[8][_o]  - p.s[5][_o]   * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[6][_o]   * p.x2[7][_o]  - p.s[6][_o]   * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[7][_o]   * p.x2[6][_o]  - p.s[7][_o]   * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[8][_o]   * p.x2[5][_o]  - p.s[8][_o]   * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[9][_o]   * p.x2[4][_o]  - p.s[9][_o]   * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[10][_o]  * p.x2[3][_o]  - p.s[10][_o]  * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[11][_o]  * p.x2[2][_o]  - p.s[11][_o]  * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[12][_o]  * p.x2[1][_o]  - p.s[12][_o]  * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[13][_o]  * p.x2[0][_o]  - p.s[13][_o]  * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[13][_o] + p.y1[13][_o]);

		case 14: return (
			(p.s[0][_o]   * p.x2[14][_o] - p.s[0][_o]   * p.x1[14][_o] - 0xfc2fn  * p.q0[14][_o]) +
			(p.s[1][_o]   * p.x2[13][_o] - p.s[1][_o]   * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[2][_o]   * p.x2[12][_o] - p.s[2][_o]   * p.x1[12][_o] - 0xfffen  * p.q0[12][_o]) +
			(p.s[3][_o]   * p.x2[11][_o] - p.s[3][_o]   * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[4][_o]   * p.x2[10][_o] - p.s[4][_o]   * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[5][_o]   * p.x2[9][_o]  - p.s[5][_o]   * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[6][_o]   * p.x2[8][_o]  - p.s[6][_o]   * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[7][_o]   * p.x2[7][_o]  - p.s[7][_o]   * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[8][_o]   * p.x2[6][_o]  - p.s[8][_o]   * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[9][_o]   * p.x2[5][_o]  - p.s[9][_o]   * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[10][_o]  * p.x2[4][_o]  - p.s[10][_o]  * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[11][_o]  * p.x2[3][_o]  - p.s[11][_o]  * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[12][_o]  * p.x2[2][_o]  - p.s[12][_o]  * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[13][_o]  * p.x2[1][_o]  - p.s[13][_o]  * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[14][_o]  * p.x2[0][_o]  - p.s[14][_o]  * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[14][_o] + p.y1[14][_o]);

		case 15: return (
			(p.s[0][_o]   * p.x2[15][_o] - p.s[0][_o]   * p.x1[15][_o] - 0xfc2fn  * p.q0[15][_o]) +
			(p.s[1][_o]   * p.x2[14][_o] - p.s[1][_o]   * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[2][_o]   * p.x2[13][_o] - p.s[2][_o]   * p.x1[13][_o] - 0xfffen  * p.q0[13][_o]) +
			(p.s[3][_o]   * p.x2[12][_o] - p.s[3][_o]   * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[4][_o]   * p.x2[11][_o] - p.s[4][_o]   * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[5][_o]   * p.x2[10][_o] - p.s[5][_o]   * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[6][_o]   * p.x2[9][_o]  - p.s[6][_o]   * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[7][_o]   * p.x2[8][_o]  - p.s[7][_o]   * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[8][_o]   * p.x2[7][_o]  - p.s[8][_o]   * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[9][_o]   * p.x2[6][_o]  - p.s[9][_o]   * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[10][_o]  * p.x2[5][_o]  - p.s[10][_o]  * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[11][_o]  * p.x2[4][_o]  - p.s[11][_o]  * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[12][_o]  * p.x2[3][_o]  - p.s[12][_o]  * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[13][_o]  * p.x2[2][_o]  - p.s[13][_o]  * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[14][_o]  * p.x2[1][_o]  - p.s[14][_o]  * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] ) +
			(p.s[15][_o]  * p.x2[0][_o]  - p.s[15][_o]  * p.x1[0][_o]  - 0xffffn  * p.q0[0][_o] )
			 - p.y2[15][_o] + p.y1[15][_o]);

		case 16: return (
			(p.s[1][_o]   * p.x2[15][_o] - p.s[1][_o]   * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[2][_o]   * p.x2[14][_o] - p.s[2][_o]   * p.x1[14][_o] - 0xfffen  * p.q0[14][_o]) +
			(p.s[3][_o]   * p.x2[13][_o] - p.s[3][_o]   * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[4][_o]   * p.x2[12][_o] - p.s[4][_o]   * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[5][_o]   * p.x2[11][_o] - p.s[5][_o]   * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[6][_o]   * p.x2[10][_o] - p.s[6][_o]   * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[7][_o]   * p.x2[9][_o]  - p.s[7][_o]   * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[8][_o]   * p.x2[8][_o]  - p.s[8][_o]   * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[9][_o]   * p.x2[7][_o]  - p.s[9][_o]   * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[10][_o]  * p.x2[6][_o]  - p.s[10][_o]  * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[11][_o]  * p.x2[5][_o]  - p.s[11][_o]  * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[12][_o]  * p.x2[4][_o]  - p.s[12][_o]  * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[13][_o]  * p.x2[3][_o]  - p.s[13][_o]  * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[14][_o]  * p.x2[2][_o]  - p.s[14][_o]  * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] ) +
			(p.s[15][_o]  * p.x2[1][_o]  - p.s[15][_o]  * p.x1[1][_o]  - 0xffffn  * p.q0[1][_o] )
			    + 0x1f85en);

		case 17: return (
			(p.s[2][_o]   * p.x2[15][_o] - p.s[2][_o]   * p.x1[15][_o] - 0xfffen  * p.q0[15][_o]) +
			(p.s[3][_o]   * p.x2[14][_o] - p.s[3][_o]   * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[4][_o]   * p.x2[13][_o] - p.s[4][_o]   * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[5][_o]   * p.x2[12][_o] - p.s[5][_o]   * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[6][_o]   * p.x2[11][_o] - p.s[6][_o]   * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[7][_o]   * p.x2[10][_o] - p.s[7][_o]   * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[8][_o]   * p.x2[9][_o]  - p.s[8][_o]   * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[9][_o]   * p.x2[8][_o]  - p.s[9][_o]   * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[10][_o]  * p.x2[7][_o]  - p.s[10][_o]  * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[11][_o]  * p.x2[6][_o]  - p.s[11][_o]  * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[12][_o]  * p.x2[5][_o]  - p.s[12][_o]  * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[13][_o]  * p.x2[4][_o]  - p.s[13][_o]  * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[14][_o]  * p.x2[3][_o]  - p.s[14][_o]  * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] ) +
			(p.s[15][_o]  * p.x2[2][_o]  - p.s[15][_o]  * p.x1[2][_o]  - 0xffffn  * p.q0[2][_o] )
			    + 0x1fffen);

		case 18: return (
			(p.s[3][_o]   * p.x2[15][_o] - p.s[3][_o]   * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[4][_o]   * p.x2[14][_o] - p.s[4][_o]   * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[5][_o]   * p.x2[13][_o] - p.s[5][_o]   * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[6][_o]   * p.x2[12][_o] - p.s[6][_o]   * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[7][_o]   * p.x2[11][_o] - p.s[7][_o]   * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[8][_o]   * p.x2[10][_o] - p.s[8][_o]   * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[9][_o]   * p.x2[9][_o]  - p.s[9][_o]   * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[10][_o]  * p.x2[8][_o]  - p.s[10][_o]  * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[11][_o]  * p.x2[7][_o]  - p.s[11][_o]  * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[12][_o]  * p.x2[6][_o]  - p.s[12][_o]  * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[13][_o]  * p.x2[5][_o]  - p.s[13][_o]  * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[14][_o]  * p.x2[4][_o]  - p.s[14][_o]  * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] ) +
			(p.s[15][_o]  * p.x2[3][_o]  - p.s[15][_o]  * p.x1[3][_o]  - 0xffffn  * p.q0[3][_o] )
			    + 0x1fffcn);

		case 19: return (
			(p.s[4][_o]   * p.x2[15][_o] - p.s[4][_o]   * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[5][_o]   * p.x2[14][_o] - p.s[5][_o]   * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[6][_o]   * p.x2[13][_o] - p.s[6][_o]   * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[7][_o]   * p.x2[12][_o] - p.s[7][_o]   * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[8][_o]   * p.x2[11][_o] - p.s[8][_o]   * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[9][_o]   * p.x2[10][_o] - p.s[9][_o]   * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[10][_o]  * p.x2[9][_o]  - p.s[10][_o]  * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[11][_o]  * p.x2[8][_o]  - p.s[11][_o]  * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[12][_o]  * p.x2[7][_o]  - p.s[12][_o]  * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[13][_o]  * p.x2[6][_o]  - p.s[13][_o]  * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[14][_o]  * p.x2[5][_o]  - p.s[14][_o]  * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] ) +
			(p.s[15][_o]  * p.x2[4][_o]  - p.s[15][_o]  * p.x1[4][_o]  - 0xffffn  * p.q0[4][_o] )
			    + 0x1fffen);

		case 20: return (
			(p.s[5][_o]   * p.x2[15][_o] - p.s[5][_o]   * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[6][_o]   * p.x2[14][_o] - p.s[6][_o]   * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[7][_o]   * p.x2[13][_o] - p.s[7][_o]   * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[8][_o]   * p.x2[12][_o] - p.s[8][_o]   * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[9][_o]   * p.x2[11][_o] - p.s[9][_o]   * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[10][_o]  * p.x2[10][_o] - p.s[10][_o]  * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[11][_o]  * p.x2[9][_o]  - p.s[11][_o]  * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[12][_o]  * p.x2[8][_o]  - p.s[12][_o]  * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[13][_o]  * p.x2[7][_o]  - p.s[13][_o]  * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[14][_o]  * p.x2[6][_o]  - p.s[14][_o]  * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] ) +
			(p.s[15][_o]  * p.x2[5][_o]  - p.s[15][_o]  * p.x1[5][_o]  - 0xffffn  * p.q0[5][_o] )
			    + 0x1fffen);

		case 21: return (
			(p.s[6][_o]   * p.x2[15][_o] - p.s[6][_o]   * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[7][_o]   * p.x2[14][_o] - p.s[7][_o]   * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[8][_o]   * p.x2[13][_o] - p.s[8][_o]   * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[9][_o]   * p.x2[12][_o] - p.s[9][_o]   * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[10][_o]  * p.x2[11][_o] - p.s[10][_o]  * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[11][_o]  * p.x2[10][_o] - p.s[11][_o]  * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[12][_o]  * p.x2[9][_o]  - p.s[12][_o]  * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[13][_o]  * p.x2[8][_o]  - p.s[13][_o]  * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[14][_o]  * p.x2[7][_o]  - p.s[14][_o]  * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] ) +
			(p.s[15][_o]  * p.x2[6][_o]  - p.s[15][_o]  * p.x1[6][_o]  - 0xffffn  * p.q0[6][_o] )
			    + 0x1fffen);

		case 22: return (
			(p.s[7][_o]   * p.x2[15][_o] - p.s[7][_o]   * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[8][_o]   * p.x2[14][_o] - p.s[8][_o]   * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[9][_o]   * p.x2[13][_o] - p.s[9][_o]   * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[10][_o]  * p.x2[12][_o] - p.s[10][_o]  * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[11][_o]  * p.x2[11][_o] - p.s[11][_o]  * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[12][_o]  * p.x2[10][_o] - p.s[12][_o]  * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[13][_o]  * p.x2[9][_o]  - p.s[13][_o]  * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[14][_o]  * p.x2[8][_o]  - p.s[14][_o]  * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] ) +
			(p.s[15][_o]  * p.x2[7][_o]  - p.s[15][_o]  * p.x1[7][_o]  - 0xffffn  * p.q0[7][_o] )
			    + 0x1fffen);

		case 23: return (
			(p.s[8][_o]   * p.x2[15][_o] - p.s[8][_o]   * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[9][_o]   * p.x2[14][_o] - p.s[9][_o]   * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[10][_o]  * p.x2[13][_o] - p.s[10][_o]  * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[11][_o]  * p.x2[12][_o] - p.s[11][_o]  * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[12][_o]  * p.x2[11][_o] - p.s[12][_o]  * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[13][_o]  * p.x2[10][_o] - p.s[13][_o]  * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[14][_o]  * p.x2[9][_o]  - p.s[14][_o]  * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] ) +
			(p.s[15][_o]  * p.x2[8][_o]  - p.s[15][_o]  * p.x1[8][_o]  - 0xffffn  * p.q0[8][_o] )
			    + 0x1fffen);

		case 24: return (
			(p.s[9][_o]   * p.x2[15][_o] - p.s[9][_o]   * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[10][_o]  * p.x2[14][_o] - p.s[10][_o]  * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[11][_o]  * p.x2[13][_o] - p.s[11][_o]  * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[12][_o]  * p.x2[12][_o] - p.s[12][_o]  * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[13][_o]  * p.x2[11][_o] - p.s[13][_o]  * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[14][_o]  * p.x2[10][_o] - p.s[14][_o]  * p.x1[10][_o] - 0xffffn  * p.q0[10][_o]) +
			(p.s[15][_o]  * p.x2[9][_o]  - p.s[15][_o]  * p.x1[9][_o]  - 0xffffn  * p.q0[9][_o] )
			    + 0x1fffen);

		case 25: return (
			(p.s[10][_o]  * p.x2[15][_o] - p.s[10][_o]  * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[11][_o]  * p.x2[14][_o] - p.s[11][_o]  * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[12][_o]  * p.x2[13][_o] - p.s[12][_o]  * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[13][_o]  * p.x2[12][_o] - p.s[13][_o]  * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[14][_o]  * p.x2[11][_o] - p.s[14][_o]  * p.x1[11][_o] - 0xffffn  * p.q0[11][_o]) +
			(p.s[15][_o]  * p.x2[10][_o] - p.s[15][_o]  * p.x1[10][_o] - 0xffffn  * p.q0[10][_o])
			    + 0x1fffen);

		case 26: return (
			(p.s[11][_o]  * p.x2[15][_o] - p.s[11][_o]  * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[12][_o]  * p.x2[14][_o] - p.s[12][_o]  * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[13][_o]  * p.x2[13][_o] - p.s[13][_o]  * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[14][_o]  * p.x2[12][_o] - p.s[14][_o]  * p.x1[12][_o] - 0xffffn  * p.q0[12][_o]) +
			(p.s[15][_o]  * p.x2[11][_o] - p.s[15][_o]  * p.x1[11][_o] - 0xffffn  * p.q0[11][_o])
			    + 0x1fffen);

		case 27: return (
			(p.s[12][_o]  * p.x2[15][_o] - p.s[12][_o]  * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[13][_o]  * p.x2[14][_o] - p.s[13][_o]  * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[14][_o]  * p.x2[13][_o] - p.s[14][_o]  * p.x1[13][_o] - 0xffffn  * p.q0[13][_o]) +
			(p.s[15][_o]  * p.x2[12][_o] - p.s[15][_o]  * p.x1[12][_o] - 0xffffn  * p.q0[12][_o])
			    + 0x1fffen);

		case 28: return (
			(p.s[13][_o]  * p.x2[15][_o] - p.s[13][_o]  * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[14][_o]  * p.x2[14][_o] - p.s[14][_o]  * p.x1[14][_o] - 0xffffn  * p.q0[14][_o]) +
			(p.s[15][_o]  * p.x2[13][_o] - p.s[15][_o]  * p.x1[13][_o] - 0xffffn  * p.q0[13][_o])
			    + 0x1fffen);

		case 29: return (
			(p.s[14][_o]  * p.x2[15][_o] - p.s[14][_o]  * p.x1[15][_o] - 0xffffn  * p.q0[15][_o]) +
			(p.s[15][_o]  * p.x2[14][_o] - p.s[15][_o]  * p.x1[14][_o] - 0xffffn  * p.q0[14][_o])
			    + 0x1fffen);

		case 30: return (
			(p.s[15][_o]  * p.x2[15][_o] - p.s[15][_o]  * p.x1[15][_o] - 0xffffn  * p.q0[15][_o])
			    + 0x1fffen);

		case 31: return ( 0x1fffen);
	}
	return 0n;
}