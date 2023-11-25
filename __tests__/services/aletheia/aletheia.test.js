const AletheiaSDK = require('../../../AletheiaSDK');
const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');

test('Get Aletheias', async () => {
    const result = await aletheiaSDK.opendata.ale().getAletheias();
    expect(result).toBeDefined();
  });


test('Get Aletheia Count', async () => {
  const result = await aletheiaSDK.opendata.ale().getAletheiasCount();
  expect(result).toBeDefined();
});

test('Get Aletheia Alexandrias', async () => {
    const result = await aletheiaSDK.opendata.ale().getAlexandrias();
    expect(result).toBeDefined();
});

test('Get Aletheia Alexandrias Count', async () => {
    const result = await aletheiaSDK.opendata.ale().getAlexandriasCount();
    expect(result).toBeDefined();
});

test('Get Aletheia Alexandrias By Id', async () => {
    // Alexandria = dataset
    const id = '61af794591a7e528ed0081f7';
    const result = await aletheiaSDK.opendata.ale().getAlexandriaById(id);
    expect(result).toBeDefined();
});

test('Get Categories', async () => {
    const result = await aletheiaSDK.opendata.ale().getCategories();
    expect(result).toBeDefined();
});

test('Get Categories Count', async () => {
    const result = await aletheiaSDK.opendata.ale().getCategoriesCount();
    expect(result).toBeDefined();
});

test('Get Category By Id', async () => {
    const id = '6290cd11bcc6090016269080';
    const result = await aletheiaSDK.opendata.ale().getCategoryById(id);
    expect(result).toBeDefined();
});

test('Get Departments', async () => {
    const result = await aletheiaSDK.opendata.ale().getDepartments();
    expect(result).toBeDefined();
}, 20000);

test('Get Departments Count', async () => {
    const result = await aletheiaSDK.opendata.ale().getDepartmentsCount();
    expect(result).toBeDefined();
});

test('Get Departments By Id', async () => {
    const id = '618ac6a4ddb70500166e296f';
    const result = await aletheiaSDK.opendata.ale().getDepartmentById(id);
    expect(result).toBeDefined();
});

test('Get Imports', async () => {
    const result = await aletheiaSDK.opendata.ale().getImports();
    expect(result).toBeDefined();
});

test('Get Imports Count', async () => {
    const result = await aletheiaSDK.opendata.ale().getImportsCount();
    expect(result).toBeDefined();
});

test('Get Import By Id', async () => {
    const id = '62d5c476d5757f00164c5b80';
    const result = await aletheiaSDK.opendata.ale().getImportById(id);
    expect(result).toBeDefined();
});

test('Get Nfts', async () => {
    const result = await aletheiaSDK.opendata.ale().getNfts();
    expect(result).toBeDefined();
});

test('Get Nfts Count', async () => {
    const result = await aletheiaSDK.opendata.ale().getNftsCount();
    expect(result).toBeDefined();
});

test('Get NFT By Id', async () => {
    const id = '632b8c13970d2c001682ec82';
    const result = await aletheiaSDK.opendata.ale().getNftById(id);
    expect(result).toBeDefined();
});

test('Get Sources', async () => {
    const result = await aletheiaSDK.opendata.ale().getSources();
    expect(result).toBeDefined();
}, 20000);

test('Get Sources Count', async () => {
    const result = await aletheiaSDK.opendata.ale().getSourcesCount();
    expect(result).toBeDefined();
}, 20000);

test('Get Source By Id', async () => {
    const id = '60d4de61148ef406f9018e4f';
    const result = await aletheiaSDK.opendata.ale().getSourceById(id);
    expect(result).toBeDefined();
}, 20000);


test('Get Uploads', async () => {
    const result = await aletheiaSDK.opendata.ale().getUploads();
    expect(result).toBeDefined();
}, 10000);

test('Get Uploads Count', async () => {
    const result = await aletheiaSDK.opendata.ale().getUploadsCount();
    expect(result).toBeDefined();
});

test('Get Upload By Id', async () => {
    const id = '6187b30e2a161d0016701b05';
    const result = await aletheiaSDK.opendata.ale().getUploadById(id);
    expect(result).toBeDefined();
});




