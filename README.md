### Этапы проработки тестового

- Ознакомление с требованиями
- Исследование криптообменников для поиска общих дизайн-паттернов
- Составление обязательных условий для реализации
- Мини-декомпозиция
- Реализация

### Техническая реализация

- **Next.js**, так как почти вся инфраструктура готова из коробки
- **TanStack Query** для прелоадинга на SSR и клиентских запросов (гидратация/мемоизация и т.д.)
- **CSS Modules**, так как этого достаточно для подобного решения
- **AgGridReact** с кастомизациями для виртуализации списка, фильтрации и сортировки. Из-за особенностей этой библиотеки дополнительно сделал легкую таблицу под SEO/ботов
- Для запросов используется стандартный `fetch`
- Mobx не использовал тк не было необходимости в нем.

### Коротко о структуре проекта

```
src/
├── common/ # Общие элементы
│ ├── components/ # Общие компоненты
│ ├── providers/ # Провайдеры (контексты, хранилища)
│ ├── types/ # Типы (TS-интерфейсы, enums)
│ └── utils/ # Утилиты (хелперы, константы)
│
├── features/ # Фичи
│ └── featureName/
│ . . ├── block/ # Сложные компоненты с логикой (хуки, стейт)
│ . . └── ui/ # UI-компоненты (верстка)
│
├── queries/ # Query-запросы
│
├── routes/ # Маршруты
│
├── services/ # API-запросы (REST, GraphQL)
│
└── (другие файлы/папки) # Остальное (например, `assets/`, `styles/`)
```

### Деплой

https://youhodler-cryptocurrency-app.vercel.app/
