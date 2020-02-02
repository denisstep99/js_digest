#### Сортировка слиянием

Основанный на принципе разделения задачи на подзадачи, 
относительно простой и быстрый алгоритм сортировки, 
использующий рекурсию. 

##### Алгоритм 

![](https://camo.githubusercontent.com/9aca2daaee76cd5334617ea3c01ae6c7c702302d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f652f65362f4d657267655f736f72745f616c676f726974686d5f6469616772616d2e737667)

```
C:= рекурсивено отсортировать первую половину массива
D:= рекурсивено отсортировать вторую половину массива
A:= пустой массив, который будет возвращен из функции

IndexC:= 0;
IndexD:= 0;

WHILE (IndexC < C::length and IndexD < D::length):
    IF (C::IndexC < D::IndexD):
        A::push(C::IndexC);
        IndexC++;
    ELSE:
        A::push(D::IndexD);
        IndexD++;
        
IF (IndexC < C::length):
    A::push([C::IndexC, ..., C::length]);
    
IF (IndexD < D::length):
    A::push([D::IndexC, ..., D::length]);
```

##### Сложность

| Best | Average | Worst    | Memory   | Stable |
|:----:|:-------:|:--------:|:--------:|:------:|
| n    | log(n)  | n log(n) | n log(n) | yes    |
