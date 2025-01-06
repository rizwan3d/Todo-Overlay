document.addEventListener('DOMContentLoaded', () => {
    fetch('input.txt')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load input.txt');
        }
        return response.text();
      })
      .then((content) => {
        renderMarkdown(content);
      })
      .catch((error) => {
        console.error('Error:', error);
        document.getElementById('output').innerHTML = '<p>Error loading input.txt</p>';
      });
  });
  
  function renderMarkdown(content) {
    const formattedContent = content
      .replace(/\[ \]/g, '<input type="checkbox" disabled>')
      .replace(/\[X\]/g, '<input type="checkbox" checked disabled>');
  
    const html = marked.parse(formattedContent);
    document.getElementById('output').innerHTML = html;
  }