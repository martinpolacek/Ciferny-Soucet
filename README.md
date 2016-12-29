# CifernySoucet
Zadání:
Napište program, který spočítá ciferný součet zadaného celého čísla.
Příklad:
1258 = 1 + 2 + 5 + 8 = 16, 16 = 1 + 6 = 7
Konečný ciferný součet čísla 1258 je 7.
Neřešte přes řetězce, ale jako číselné hodnoty aritmetickými operacemi.

Řešení:
Pomocí cyklu while zjištěné číslo vždy vydělí 10, zaokrouhlí dolu a přičtě zbytek z původního čísla vyděleného 10.
Např.: 1258 => 125 + 8 == 133 => 13 + 3 == 16 ==> 1 + 6 ----> 7
