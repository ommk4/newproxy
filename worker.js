export default {
  async fetch(request) {
    let url = new URL(request.url);
    
    // استبدال الدومين الأصلي بـ Instagram
    url.hostname = "www.instagram.com";

    let modifiedRequest = new Request(url, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow"
    });

    // تنفيذ الطلب وإرجاع الاستجابة
    return fetch(modifiedRequest);
  },
};
