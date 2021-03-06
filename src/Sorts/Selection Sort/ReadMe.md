#### Сортировка выбором

Алгоритм сортировки, заключающийся в поиске наименьшего элемента в неотсортированной части массива 
(Внутренний цикл)
с последующим обменом его с элементом соответствующим текущий итерации цикла (Внешний цикл).

1. По очереди проходим по всем элементам массива.
2. Для каждой итерации внешнего цикла, внутренний цикл определяет наименьший элемент в оставшейся части 
массива (включая текущий элемент).
3. После того как наименьший элемент найден, элемент внешней итерации меняется с наименьшим элементом.

Демонстрация:<br><br>
![](https://camo.githubusercontent.com/adfa2cdcc3825092dc405aadd87453571d6e0dc4/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f392f39342f53656c656374696f6e2d536f72742d416e696d6174696f6e2e676966)

##### Сложность

| Best | Average | Worst    | Memory   | Stable |
|:----:|:-------:|:--------:|:--------:|:------:|
| n<sup>2</sup>    | n<sup>2</sup>  | n<sup>2</sup> | 1 | no   |
