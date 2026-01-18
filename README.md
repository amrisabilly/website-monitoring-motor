# Project Goda

## Instalasi

1. **Clone repository**
    ```bash
    git clone <repo-url>
    cd project-goda
    ```
2. **Install dependency PHP**
    ```bash
    composer install
    ```
3. **Install dependency JavaScript**
    ```bash
    npm install
    ```
4. **Copy file environment**
    ```bash
    cp .env.example .env
    ```
5. **Generate key aplikasi**
    ```bash
    php artisan key:generate
    ```
6. **Migrasi dan seed database**
    ```bash
    php artisan migrate --seed
    ```
7. **Jalankan server lokal**
    ```bash
    php artisan serve
    ```
8. **Jalankan Vite (untuk asset frontend)**
    ```bash
    npm run dev
    ```

## Penamaan File & Folder

- **Controller**: PascalCase, akhiri dengan `Controller` (contoh: `UserController.php`)
- **Model**: PascalCase, singular (contoh: `User.php`)
- **Migration**: snake_case, deskriptif (contoh: `2024_01_01_000000_create_users_table.php`)
- **Seeder**: PascalCase, akhiri dengan `Seeder` (contoh: `UserSeeder.php`)
- **View**: snake_case, sesuai fitur (contoh: `dashboard.blade.php`)
- **Route**: Gunakan file sesuai domain (contoh: `web.php`, `api.php`)
- **Folder**: PascalCase untuk class-based, snake_case untuk resource (contoh: `Controllers/`, `views/`)

## Standarisasi Proyek

- **Struktur folder mengikuti standar Laravel**
- **Gunakan bahasa Inggris untuk kode, komentar, dan nama file/folder**
- **Setiap fitur baru dibuatkan controller, model, migration, dan route terpisah**
- **Gunakan commit message yang jelas dan deskriptif**

## Standar Commit Message

Gunakan format commit message berikut untuk konsistensi dan kemudahan tracking perubahan:

```text
feat: add user login functionality
fix: resolve crash on homepage load
docs: update README with setup instructions
style: reformat code with Prettier
refactor: simplify form validation logic
```

### Template

```
feat:
fix:
docs:
refactor:
```

| Prefix     | Keterangan                                                         |
| ---------- | ------------------------------------------------------------------ |
| `feat`     | Menambahkan fitur baru                                             |
| `fix`      | Memperbaiki bug                                                    |
| `docs`     | Perubahan pada dokumentasi saja                                    |
| `style`    | Perubahan gaya kode (whitespace, format, tanpa mengubah logika)    |
| `refactor` | Refaktor kode (tanpa menambah fitur atau memperbaiki bug)          |
| `perf`     | Perubahan untuk meningkatkan performa                              |
| `test`     | Menambahkan atau memperbaiki tes                                   |
| `build`    | Perubahan yang memengaruhi sistem build/dependensi eksternal       |
| `ci`       | Perubahan terkait integrasi terus-menerus (CI tools, scripts, dll) |
| `chore`    | Perubahan lain-lain yang tidak masuk kategori di atas              |
| `revert`   | Membalikkan commit sebelumnya                                      |

```

## Kontribusi

2. Buat branch fitur: `git checkout -b fitur/FE-nama`
3. Commit perubahan: `git commit -m 'feat: deskripsi fitur'`
4. Push ke branch: `git push origin fitur/FE-nama`

---
```
