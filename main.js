const accessToken = 'YOUR_ACCESS_TOKEN';

describe('GoRest API Testing', () => {

  // a. Membuat User Baru (POST)
  it('should create a new user', async () => {
    const response = await browser.call(async () => {
      return await browser.request.post('/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: {
          name: 'Andrea Jane',
          email: 'andreajn@example.com',
          gender: 'female',
          status: 'active',
        },
      });
    });

    expect(response.status).toBe(201);
    expect(response.body.data.name).toBe('John Doe');
  });

  
  it('should get user details', async () => {
    const userId = 1234; 
    const response = await browser.call(async () => {
      return await browser.request.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    });

    expect(response.status).toBe(200);
    expect(response.body.data.id).toBe(userId);
  });

  
  it('should update user details', async () => {
    const userId = 1234; 
    const response = await browser.call(async () => {
      return await browser.request.put(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: {
          name: 'Andrea Jane New',
          email: 'andreanew@example.com',
        },
      });
    });

    expect(response.status).toBe(200);
    expect(response.body.data.name).toBe('John Doe Updated');
  });

  
  it('should delete user', async () => {
    const userId = 1234; // Gantilah dengan ID user yang valid
    const response = await browser.call(async () => {
      return await browser.request.delete(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    });

    expect(response.status).toBe(204); 
  });

});
