import { test, expect } from '@playwright/test';

test('TC01', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForTimeout(2000);
  });

test('TC02', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(2000);
  });

test('TC03', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'gb' }).click();
    await page.waitForTimeout(2000);
  });

test('TC04', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'id' }).click();
    await page.waitForTimeout(2000);
  });

  // Home page thai --------------------

test('TC05', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await expect(page.locator('#category-3')).toContainText('  เสื้อผ้า');
    await expect(page.locator('#category-6')).toContainText('  อุปกรณ์เสริม');
    await page.waitForTimeout(2000);
  });

test('TC06', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.getByRole('heading', { name: 'สินค้ายอดนิยม' }).scrollIntoViewIfNeeded();
    await expect(page.locator('#content')).toContainText('สินค้ายอดนิยม');
    await page.waitForTimeout(1000);
    await page.getByRole('heading', { name: 'สินค้าใหม่' }).scrollIntoViewIfNeeded();
    await expect(page.locator('#content')).toContainText('สินค้าใหม่');
    await page.waitForTimeout(2000);
  });

test('TC07', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.locator('p').filter({ hasText: 'สินค้า' }).scrollIntoViewIfNeeded();
    await expect(page.locator('#footer')).toContainText('สินค้า');
    await expect(page.locator('#footer')).toContainText('บริษัท ของเรา');
    await page.waitForTimeout(2000);
  });

// Home page EN --------------
test('TC08', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('#category-3')).toContainText('  Clothes');
  await expect(page.locator('#category-6')).toContainText('  Accessories');
  await page.waitForTimeout(2000);
});

test('TC09', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByRole('heading', { name: 'Popular Products' }).scrollIntoViewIfNeeded();
  await expect(page.locator('#content')).toContainText('Popular Products');
  await page.waitForTimeout(1000);
  await page.getByRole('heading', { name: 'New products' }).scrollIntoViewIfNeeded();
  await expect(page.locator('#content')).toContainText('New products');
  await page.waitForTimeout(2000);
});

test('TC10', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'gb' }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'Products' }).scrollIntoViewIfNeeded();
  await expect(page.locator('#footer')).toContainText('Products');
  await expect(page.locator('#footer')).toContainText('Our company');
  await page.waitForTimeout(2000);
});

// Home page In ---------
test('TC11', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.locator('#category-3')).toContainText('  Pakaian');
  await expect(page.locator('#category-6')).toContainText('  Aksesoris');
  await page.waitForTimeout(2000);
});

test('TC12', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'id' }).click();
  await page.getByRole('heading', { name: 'Populer' }).scrollIntoViewIfNeeded();
  await expect(page.locator('#content')).toContainText('Populer');
  await page.waitForTimeout(1000);
  await page.getByRole('heading', { name: 'Produk baru' }).scrollIntoViewIfNeeded();
  await expect(page.locator('#content')).toContainText('Produk baru');
  await page.waitForTimeout(2000);
});

test('TC13', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'id' }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'Produk' }).scrollIntoViewIfNeeded();
  await expect(page.locator('#footer')).toContainText('Produk');
  await expect(page.locator('#footer')).toContainText('Perusahaan kita');
  await page.waitForTimeout(2000);
});

// Home page 3 Lan ----------

test('TC14', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'สินค้าทั้งหมด ' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'ดูสินค้าใหม่ทั้งหมด ' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).scrollIntoViewIfNeeded();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'All products ' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'All new products ' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).scrollIntoViewIfNeeded();
  await page.getByRole('link', { name: 'id' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Semua produk ' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Semua produk baru ' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
});
// Home product quick view----
test('TC15', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('article').filter({ hasText: ' เปิดหน้าต่างย่อ เสื้อแจ็คเก็ต 60Y KKU ฿690.00 ใหม่' }).getByRole('link').nth(1).click();
  await expect(page.locator('#quickview-modal-21-0')).toContainText('เสื้อแจ็คเก็ต 60Y KKU');
  await page.locator('span').filter({ hasText: 'แชร์' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('ปิด').click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.waitForTimeout(1000);
  await page.locator('article').filter({ hasText: ' Quick view Jacket 60Y KKU ฿' }).getByRole('link').nth(1).click();
  await expect(page.locator('#quickview-modal-21-0')).toContainText('Jacket 60Y KKU');
  await expect(page.locator('#quickview-modal-21-0')).toContainText('Share');
  await page.waitForTimeout(1000);
  await page.getByLabel('Close').click();
  await page.getByRole('link', { name: 'id' }).click();
  await page.waitForTimeout(1000);
  await page.locator('article').filter({ hasText: ' Lihat sekilas Jaket 60Y KKU' }).getByRole('link').nth(1).click();
  await expect(page.locator('#quickview-modal-21-0')).toContainText('Jaket 60Y KKU');
  await expect(page.locator('#quickview-modal-21-0')).toContainText('Membagikan');
  await page.waitForTimeout(1000);
  await page.getByLabel('Tutup').click();
  await page.waitForTimeout(1000);
});

test('TC16', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'สินค้า' }).scrollIntoViewIfNeeded();
  await expect(page.locator('#link-category-10-1')).toContainText('กระเป๋า');
  await expect(page.locator('#link-category-11-1')).toContainText('หมวก');
  await expect(page.locator('#link-category-6-1')).toContainText('อุปกรณ์เสริม');
  await expect(page.locator('#link-category-14-1')).toContainText('เคสโทรศัพท์');
  await expect(page.locator('#link-category-3-1')).toContainText('เสื้อผ้า');
  await page.waitForTimeout(1000);
});

test('TC17', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'บริษัท ของเรา' }).scrollIntoViewIfNeeded();
  await expect(page.locator('#link-cms-page-1-2')).toContainText('จัดส่ง');
  await expect(page.locator('#link-cms-page-2-2')).toContainText('ประกาศทางกฎหมาย');
  await expect(page.locator('#link-cms-page-3-2')).toContainText('ข้อกำหนดและเงื่อนไขการใช้งาน');
  await expect(page.locator('#link-cms-page-4-2')).toContainText('เกี่ยวกับเรา');
  await expect(page.locator('#link-cms-page-5-2')).toContainText('การชำระเงินที่ปลอดภัย');
  await page.waitForTimeout(1000);
});

test('TC18', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'gb' }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'Products' }).scrollIntoViewIfNeeded();
  await expect(page.locator('#link-category-10-1')).toContainText('Bag');
  await expect(page.locator('#link-category-11-1')).toContainText('Hat');
  await expect(page.locator('#link-category-6-1')).toContainText('Accessories');
  await expect(page.locator('#link-category-14-1')).toContainText('Phone Case');
  await expect(page.locator('#link-category-3-1')).toContainText('Clothes');
  await page.waitForTimeout(1000);
});

test('TC19', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'gb' }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'Our company' }).scrollIntoViewIfNeeded();
  await expect(page.locator('#link-cms-page-1-2')).toContainText('Delivery');
  await expect(page.locator('#link-cms-page-2-2')).toContainText('Legal Notice');
  await expect(page.locator('#link-cms-page-3-2')).toContainText('Terms and conditions of use');
  await expect(page.locator('#link-cms-page-4-2')).toContainText('About us');
  await expect(page.locator('#link-cms-page-5-2')).toContainText('Secure payment');
  await page.waitForTimeout(1000);
});

test('TC20', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'id' }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'Produk' }).scrollIntoViewIfNeeded();
  await expect(page.locator('#link-category-10-1')).toContainText('Tas');
  await expect(page.locator('#link-category-11-1')).toContainText('Topi');
  await expect(page.locator('#link-category-6-1')).toContainText('Aksesoris');
  await expect(page.locator('#link-category-14-1')).toContainText('Pelindung Handphone');
  await expect(page.locator('#link-category-3-1')).toContainText('Pakaian');
  await page.waitForTimeout(1000);
});

test('TC21', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'id' }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'Perusahaan kita' }).scrollIntoViewIfNeeded();
  await expect(page.locator('#link-cms-page-1-2')).toContainText('Pengiriman');
  await expect(page.locator('#link-cms-page-2-2')).toContainText('Pemberitahuan Hukum');
  await expect(page.locator('#link-cms-page-3-2')).toContainText('syarat dan ketentuan penggunaan');
  await expect(page.locator('#link-cms-page-4-2')).toContainText('Tentang kami');
  await expect(page.locator('#link-cms-page-5-2')).toContainText('Pembayaran yang aman');
  await page.waitForTimeout(1000);
});

test('TC22', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'สินค้า' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'กระเป๋า', exact: true }).click();
  await expect(page.locator('h1')).toContainText('กระเป๋า');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.locator('h1')).toContainText('Tas');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('h1')).toContainText('Bag');
  await page.waitForTimeout(1000);
});


test('TC23', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'สินค้า' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'หมวก', exact: true }).click();
  await expect(page.locator('h1')).toContainText('หมวก');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('h1')).toContainText('Hat');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.locator('h1')).toContainText('Topi');
  await page.waitForTimeout(1000);
});

test('TC24', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'สินค้า' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByText('อุปกรณ์เสริม', { exact: true }).click();
  await expect(page.locator('h1')).toContainText('อุปกรณ์เสริม');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('h1')).toContainText('Accessories');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.locator('h1')).toContainText('Aksesoris');
  await page.waitForTimeout(1000);
});

test('TC25', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'สินค้า' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'เคสโทรศัพท์', exact: true }).click();
  await expect(page.locator('h1')).toContainText('เคสโทรศัพท์');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('h1')).toContainText('Phone Case');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.locator('h1')).toContainText('Pelindung Handphone');
  await page.waitForTimeout(1000);
});

test('TC26', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'สินค้า' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.goto('http://localhost:8080/th/3-clothes');
  await expect(page.locator('h1')).toContainText('เสื้อผ้า');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.locator('h1')).toContainText('Pakaian');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('h1')).toContainText('Clothes');
  await page.waitForTimeout(1000);
});


test('TC27', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'บริษัท ของเรา' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'จัดส่ง' }).click();
  await expect(page.locator('#content')).toContainText('การจัดส่งและการคืนสินค้า');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('h2')).toContainText('Shipments and returns');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.locator('#content')).toContainText('Pengiriman dan pengembalian');
  await page.waitForTimeout(1000);
});

test('TC28', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'บริษัท ของเรา' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'ประกาศทางกฎหมาย' }).click();
  await expect(page.locator('#content')).toContainText('ถูกกฎหมาย');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('h2')).toContainText('Legal');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.locator('#content')).toContainText('Hukum');
  await page.waitForTimeout(1000);
});

test('TC29', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'บริษัท ของเรา' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'เกี่ยวกับเรา' }).click();
  await expect(page.locator('#content')).toContainText('เกี่ยวกับเรา');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('#content')).toContainText('About us');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.locator('#content')).toContainText('Tentang kami');
  await page.waitForTimeout(1000);
});

test('TC30', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('p').filter({ hasText: 'บริษัท ของเรา' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'การชำระเงินที่ปลอดภัย' }).click();
  await expect(page.locator('#content')).toContainText('การชำระเงินที่ปลอดภัย');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.locator('#content')).toContainText('Pembayaran yang aman');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('h2')).toContainText('Secure payment');
  await page.waitForTimeout(1000);
});


test('TC31', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('  เสื้อผ้า').click();
  await page.waitForTimeout(1000);
  await expect(page.locator('h1')).toContainText('เสื้อผ้า');
  await page.getByRole('link', { name: 'gb' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('h1')).toContainText('Clothes');
  await page.getByRole('link', { name: 'id' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('h1')).toContainText('Pakaian');
  await page.waitForTimeout(1000);
});

test('TC32', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('  เสื้อผ้า').click();
  await page.waitForTimeout(1000);
  await page.locator('#left-column').getByRole('link', { name: 'เสื้อยืด' }).click();
  await expect(page.locator('h1')).toContainText('เสื้อยืด');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('h1')).toContainText('T-shirt');
  await page.getByRole('link', { name: 'id' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('h1')).toContainText('Kaos');
  await page.waitForTimeout(1000);
});

test('TC33', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('  เสื้อผ้า').click();
  await page.waitForTimeout(1000);
  await page.locator('#left-column').getByRole('link', { name: 'เสื้อแจ็คเก็ต' }).click();
  await expect(page.locator('h1')).toContainText('เสื้อแจ็คเก็ต');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.locator('h1')).toContainText('Jaket');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('h1')).toContainText('Jacket');
  await page.waitForTimeout(1000);
});

test('TC34', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('  อุปกรณ์เสริม').click();
  await page.waitForTimeout(1000);
  await expect(page.locator('h1')).toContainText('อุปกรณ์เสริม');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('h1')).toContainText('Accessories');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('h1')).toContainText('Aksesoris');
  await page.waitForTimeout(1000);
});

test('TC35', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('  อุปกรณ์เสริม').click();
  await page.waitForTimeout(1000);
  await page.locator('#left-column').getByRole('link', { name: 'กระเป๋า' }).click();
  await expect(page.locator('h1')).toContainText('กระเป๋า');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('h1')).toContainText('Bag');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('h1')).toContainText('Tas');
  await page.waitForTimeout(1000);
});

test('TC36', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('  อุปกรณ์เสริม').click();
  await page.waitForTimeout(1000);
  await page.locator('#left-column').getByRole('link', { name: 'หมวก' }).click();
  await expect(page.locator('h1')).toContainText('หมวก');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('h1')).toContainText('Hat');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('h1')).toContainText('Topi');
  await page.waitForTimeout(1000);
});

test('TC37', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('  อุปกรณ์เสริม').click();
  await page.waitForTimeout(1000);
  await page.locator('#left-column').getByRole('link', { name: 'เคสโทรศัพท์' }).click();
  await expect(page.locator('h1')).toContainText('เคสโทรศัพท์');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.locator('h1')).toContainText('Pelindung Handphone');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('h1')).toContainText('Phone Case');
  await page.waitForTimeout(1000);
});

test('TC38', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('  อุปกรณ์เสริม').click();
  await page.waitForTimeout(1000);
  await page.locator('#left-column').getByRole('link', { name: 'แก้วน้ำ' }).click();
  await expect(page.locator('h1')).toContainText('แก้วน้ำ');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.locator('h1')).toContainText('Glass');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'id' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('h1')).toContainText('Kaca');
  await page.waitForTimeout(1000);
});

test('TC39', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('  เสื้อผ้า').click();
  await page.waitForTimeout(1000);
  await page.getByLabel('จัดเรียงตามการเลือก').scrollIntoViewIfNeeded();
  await page.getByLabel('จัดเรียงตามการเลือก').click();
  await expect(page.locator('#js-product-list-top')).toContainText('สิ่งที่เกี่ยวข้อง');
  await expect(page.locator('#js-product-list-top')).toContainText('ตามชื่อ A ถึง Z');
  await expect(page.locator('#js-product-list-top')).toContainText('ตามชื่อ Z ถึง A');
  await expect(page.locator('#js-product-list-top')).toContainText('ราคา : จากน้อยไปมาก');
  await expect(page.locator('#js-product-list-top')).toContainText('ราคา: จากมากไปน้อย');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'ราคา : จากน้อยไปมาก' }).click();
  await page.waitForTimeout(1000);
});

test('TC40', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByText('  Clothes').click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Relevance').scrollIntoViewIfNeeded();
  await expect(page.locator('#js-product-list-top')).toContainText('Relevance');
  await expect(page.locator('#js-product-list-top')).toContainText('Name, A to Z');
  await expect(page.locator('#js-product-list-top')).toContainText('Name, Z to A');
  await expect(page.locator('#js-product-list-top')).toContainText('Price, low to high');
  await expect(page.locator('#js-product-list-top')).toContainText('Price, high to low');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Price, high to low' }).click();
  await page.waitForTimeout(1000);
});

test('TC41', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'id' }).click();
  await page.getByText('  Pakaian').click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Urutkan berdasarkan pilihan').scrollIntoViewIfNeeded();
  await page.getByLabel('Urutkan berdasarkan pilihan').click();
  await expect(page.locator('#js-product-list-top')).toContainText('Relevansi');
  await expect(page.locator('#js-product-list-top')).toContainText('Nama, A ke Z');
  await expect(page.locator('#js-product-list-top')).toContainText('Nama, Z ke A');
  await expect(page.locator('#js-product-list-top')).toContainText('Harga, Rendah ke Tinggi');
  await expect(page.locator('#js-product-list-top')).toContainText('Harga, Tinggi ke Rendah');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Nama, A ke Z' }).click();
  await page.waitForTimeout(1000);
});

  // -------------------------------------