// Add JavaScript below
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://wdwcripuhwdpazheefje.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indkd2NyaXB1aHdkcGF6aGVlZmplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MDE2MDIsImV4cCI6MjAyNjM3NzYwMn0.Ng0l-1KhUOSdA4Ne-LPH2wGfX6o9vUMFY7n81zGQjZw'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() { 
    let { data: books, error } = await supabase
    .from('books')
    .select('*')

    for (let book of books) {
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<li>${book.title} - ${book.author} - ${book.isbn}</li>`;
    }
}

getBooks();