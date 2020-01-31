#### Задача о рюкзаке

> ##### Условие
> Дано <img src="https://latex.codecogs.com/gif.latex?N"/> предметов, <img src="https://latex.codecogs.com/gif.latex?n_i"/>
> предмет имеет массу <img src="https://latex.codecogs.com/gif.latex?w_i>0"/> 
> и стоимость <img src="https://latex.codecogs.com/gif.latex?p_i>0"/>. 
> Необходимо выбрать из этих предметов такой набор, чтобы 
> суммарная масса не превосходила заданной величины <img src="https://latex.codecogs.com/gif.latex?W"/> (вместимость рюкзака), 
> а суммарная стоимость была максимальна.

##### Метод динамического программирования
Пусть <img src="https://latex.codecogs.com/gif.latex?A(k,s)"/> есть максимальная стоимость предметов, 
которые можно уложить в рюкзак вместимости <img src="https://latex.codecogs.com/gif.latex?s"/>, 
если можно использовать только первые <img src="https://latex.codecogs.com/gif.latex?k"/> предметов, 
то есть <img src="https://latex.codecogs.com/gif.latex?\{n_1,n_2,…,n_k\}"/>, этот 
набор будем считать допустимым для <img src="https://latex.codecogs.com/gif.latex?A(k,s)"/>.<br>

Начальные условия: <br>
<img src="https://latex.codecogs.com/gif.latex?A(k,0)=0"/> <br>
<img src="https://latex.codecogs.com/gif.latex?A(0,s)=0"/> <br>

Заметим, что <img src="https://latex.codecogs.com/gif.latex?A(k,s)"/> может быть получено только двумя способами:<br>
1. Если предмет <img src="https://latex.codecogs.com/gif.latex?k"/> не попал в рюкзак. 
Тогда <img src="https://latex.codecogs.com/gif.latex?A(k,s)"/> равно максимальной стоимости рюкзака с такой же вместимостью и набором допустимых 
предметов <img src="https://latex.codecogs.com/gif.latex?\{n_1,n_2,…,n_k−1\}"/>, то есть <img src="https://latex.codecogs.com/gif.latex?A(k,s)=A(k−1,s)"/>.

2. Если <img src="https://latex.codecogs.com/gif.latex?k"/>попал в рюкзак. Тогда<img src="https://latex.codecogs.com/gif.latex?A(k,s)"/> равно максимальной стоимости рюкзака, 
где вес s уменьшаем на вес <img src="https://latex.codecogs.com/gif.latex?k"/>-ого предмета и набор допустимых 
предметов <img src="https://latex.codecogs.com/gif.latex?\{n_1,n_2,…,n_k−1\}"/>плюс стоимость <img src="https://latex.codecogs.com/gif.latex?k"/>, то есть<img src="https://latex.codecogs.com/gif.latex?A(k−1,s−w_k)+pk"/>.

То есть: <img src="https://latex.codecogs.com/gif.latex?A(k,s)=max(A(k−1,s),A(k−1,s−w_k)+p_k)"/>

Стоимость искомого набора равна <img src="https://latex.codecogs.com/gif.latex?A(N,W)"/>, так как нужно найти максимальную стоимость рюкзака, 
где все предметы допустимы и вместимость рюкзака <img src="https://latex.codecogs.com/gif.latex?W"/>.

[Подробнее](https://neerc.ifmo.ru/wiki/index.php?title=%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B0_%D0%BE_%D1%80%D1%8E%D0%BA%D0%B7%D0%B0%D0%BA%D0%B5)
