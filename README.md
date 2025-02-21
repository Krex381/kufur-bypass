# Türk Discord Bot Küfür Filtre Bypass Aracı

Bu araç, Discord botlarının küfür/yasaklı kelime filtrelerini bypass etmek için tasarlanmıştır. Latin alfabesindeki karakterleri görsel olarak benzer Kiril karakterleriyle değiştirir.

## Desteklenen Bot Filtreleri

Aşağıdaki botların filtrelerinde test edilmiştir:
- Aether Bot
- Chaos Bot
- Guard Bot
- ModernBot
- ErensiBot
- Ve diğer genel moderasyon botları

## Nasıl Çalışır?

Program, yasaklı kelimelerdeki Latin karakterleri (örn: a, e, i, o, u) görsel olarak benzer Kiril karakterleriyle (а, е, і, о, ц) değiştirir. Bu sayede:
- Botlar farklı alfabeden karakterleri tanımaz
- Mesaj görsel olarak neredeyse aynı görünür
- Filtre sistemleri atlatılmış olur

## Kullanım Örneği

Original metin: `merhaba` veya `artik yarraklari sallayabiliriz demi`
Dönüştürülmüş: `меrһаbа` veya `аrтіk уаrrаklаrі ѕаllауаbіlіrіz dеmі`

## Detaylı Kurulum

1. Node.js'i bilgisayarınıza kurun (https://nodejs.org)
2. Bu projeyi ZIP olarak indirin
3. ZIP dosyasını çıkartın
4. Komut İstemi (CMD) veya Terminal'i açın
5. Proje klasörüne gidin:
```bash
cd kufur-bypass
```
6. Programı çalıştırın:
```bash
node index.js
```

## Desteklenen Karakterler

Aşağıdaki karakterler otomatik olarak dönüştürülür:
- a → а
- e → е
- i → і
- o → о
- u → ц
- s → ѕ
(ve dahası...)

## Önemli Uyarılar

⚠️ Bu araç eğitim ve test amaçlıdır:
- Kötüye kullanım kullanıcının sorumluluğundadır
- Discord Topluluk Kurallarını ihlal edebilir
- Sunuculardan yasaklanmanıza sebep olabilir
- Sadece test ortamlarında kullanın

## Güncelleme Notları

v1.0.0
- İlk sürüm
- 25+ karakter desteği
- Konsol arayüzü

## Planlanan Özellikler

- GUI arayüzü
- Daha fazla karakter desteği
- Otomatik kelime önerileri
- Discord bot entegrasyonu

## Teknik Detaylar

- Node.js ile geliştirilmiştir
- Readline kütüphanesi kullanılmıştır
- Karakter haritası JSON formatında tutulur
- Anında dönüşüm sağlar

## İletişim

Hata bildirimi ve öneriler için:
- GitHub Issues
- Discord: [alird1221]