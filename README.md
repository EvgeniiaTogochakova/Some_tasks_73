# JavaScript pro browser APIs 

## Homework 1

Необходимо создать веб-страницу с динамическими элементами с расписанием занятий.

На странице должна быть таблица с расписанием занятий, на основе JSON-данных.
Каждая строка таблицы должна содержать информацию о занятии, а именно:
- название занятия
- время проведения занятия
- максимальное количество участников
- текущее количество участников
- кнопка "записаться"
- кнопка "отменить запись"

Если максимальное количество участников достигнуто, либо пользователь уже записан на занятие, сделайте кнопку "записаться" неактивной.
Кнопка "отменить запись" активна в случае, если пользователь записан на занятие, иначе она должна быть неактивна.

Пользователь может записаться на один курс только один раз.

При нажатии на кнопку "записаться" увеличьте количество записанных участников.
Если пользователь нажимает "отменить запись", уменьшите количество записанных участников.
Обновляйте состояние кнопок и количество участников в реальном времени.

Если количество участников уже максимально, то пользователь не может записаться, даже если он не записывался ранее.

Сохраняйте данные в LocalStorage, чтобы они сохранялись и отображались при перезагрузке страницы.
