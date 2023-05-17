const { Post} = require('../models');

const postData = [
  {
    title: 'CSS for Dummies',
    content: `Cascading Style Sheets (CSS) is a fundamental part of building websites. It is a language that allows web developers to style the appearance of their web pages, making them visually appealing and easy to read. In this blog post, we will go over the basics of writing CSS.

    CSS works by defining rules for how HTML elements should be displayed on the screen. These rules consist of a selector and a declaration block. The selector is the HTML element that the rule applies to, and the declaration block consists of one or more properties and their corresponding values.
    
    For example, to change the font size of all headings on a webpage, you can write the following CSS code:
    
    css
    Copy code
    h1, h2, h3 {
      font-size: 24px;
    }
    In this code snippet, the selector is the comma-separated list of h1, h2, and h3 elements, and the property is font-size, with a value of 24px.
    
    CSS can be written in separate files or embedded directly in the HTML document using the style element. The former is preferred as it separates the styling from the content, making it easier to maintain and update.
    
    In addition to selectors and properties, CSS also includes pseudo-classes, pseudo-elements, and media queries. Pseudo-classes are used to style elements based on their state, such as :hover for when the mouse pointer is over an element. Pseudo-elements are used to add styling to specific parts of an element, such as ::before to add content before an element. Media queries are used to apply different styles based on the screen size, allowing for responsive web design.
    
    In summary, CSS is an essential tool for creating visually appealing websites. Understanding the basics of CSS is crucial for any web developer. With the knowledge of selectors, properties, pseudo-classes, pseudo-elements, and media queries, you can create elegant and responsive web pages that look great on any device.`,
    user_id: 1,
  },

  {
    title: 'What The Heck Is a Flex Box?',
    content: 'Flexbox is a layout module in CSS that allows developers to create flexible and responsive layouts without the need for complex CSS code. With flexbox, you can easily align and distribute elements within a container, and adjust their size and position based on the available space. Flexbox uses a set of properties on the container and its child elements, such as display: flex, justify-content, align-items, and flex-grow. With these properties, you can create layouts that adapt to different screen sizes and orientations, and simplify the process of building responsive websites. Flexbox is widely supported by modern browsers and is a popular choice for creating modern web layouts.',
    user_id: 1,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
