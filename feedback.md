### Here is the feedback on your project 

1. Repository name "E-commerce-page" to "E-Commerce"
2. Create a Header Component and Use that in the Layout instead of Navbar
3. Use the Navbar inside the Header
4. Use Navlink for the Header Menus (like Home, About etc) (Right now they are not clickable)
 Ref: https://reactrouter.com/en/main/components/nav-link
5. In the Footer replace <a> tag with <Link> from the react router dom
Ref: https://reactrouter.com/en/main/components/link
6. Social Icons should be clickable in the footer and should open a new tab using <Link tag>
 Ref: https://stackoverflow.com/questions/30202755/react-router-open-link-in-new-tab 
7. Follow this project structure. 
```
e-commerce/
│
├── public/
│   ├── index.html        
│   ├── favicon.ico       
│   └── ...               
│
├── src/
│   ├── assets/           
│   │   ├── images/       
│   │   ├── icons/        
│   │   └── ...           
│   ├── components/       
│   │   ├── Header.js        
│   │   ├── NavBar.js        
│   │   ├── ProductCard.js   
│   │   ├── ProductList.js   
│   │   ├── CartItem.js      
│   │   ├── BlogCard.js      
│   │   ├── BlogPostPreview.js
│   │   ├── BlogComment.js  
│   │   ├── Pagination.js    
│   │   ├── SearchBar.js     
│   │   ├── Footer.js        
│   │   ├── UserProfile.js  
│   │   ├── OrderSummary.js 
│   │   ├── CheckoutForm.js 
│   │   ├── OrderItem.js    
│   │   ├── ProductFilter.js
│   │   ├── ProductCarousel.js
│   │   ├── PaymentForm.js  
│   │   └── ...              
│   ├── layouts/          
│   │   ├── MainLayout.js   
│   │   ├── BlogLayout.js   
│   │   ├── CheckoutLayout.js
│   │   ├── AuthLayout.js   
│   ├── pages/            
│   │   ├── Home.js         
│   │   ├── Cart.js         
│   │   ├── Shop.js         
│   │   ├── ProductDetail.js
│   │   ├── Blog.js         
│   │   ├── BlogPost.js     
│   │   ├── About.js        
│   │   ├── Contact.js      
│   │   ├── Account.js      
│   │   ├── Checkout.js     
│   │   ├── OrderSuccess.js 
│   │   ├── OrderHistory.js
│   │   ├── Login.js        
│   │   ├── Register.js     
│   │   ├── ForgotPassword.js
│   │   ├── UpdateProfile.js  
│   │   ├── MyAccount.js    
│   │   ├── Terms.js        
│   │   ├── Privacy.js      
│   │   └── ...             
│   ├── redux/            
│   │   ├── slices/       
│   │   │   ├── cartSlice.js  
│   │   │   ├── productSlice.js
│   │   │   ├── blogSlice.js
│   │   │   ├── userSlice.js
│   │   │   ├── orderSlice.js
│   │   │   ├── authSlice.js
│   │   └── store.js      
│   ├── App.js              
│   ├── index.js          
│   ├── styles/           
│   │   ├── main.css       
│   │   ├── header.css     
│   │   ├── footer.css     
│   │   ├── login.css      
│   │   ├── account.css   
│   │   └── ...           
│   └── utils/            
│       ├── api.js        
│       ├── helpers.js    
│       └── validators.js 
│
├── .gitignore            
├── package.json          
├── README.md             
└── node_modules/         
    
```