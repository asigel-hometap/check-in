# Check-in App TO-DO List

## High Priority
- [X] De-dupe recommendations
  - Currently recommendations can appear multiple times if triggered by different answers
  - Need to implement a unique ID system for recommendations
  - Ensure recommendations only appear once in the list

- [X] Add more recommendations
  - Need more variety in recommendation types (Article, Video, Contact, etc.)
  - Add recommendations for different life events
  - Add recommendations for different financial goals
  - Consider personalization based on persona type

- [ ] Replace contact icon
  - Current contact icon needs to be updated
  - Should match the design system
  - Consider different icons for different types of contact (email, phone, etc.)

- [ ] Solve for "Your goals"
  - Goals list needs to properly handle all answer types
  - Ensure proper formatting of goals text
  - Handle edge cases (no goals selected, only "none" selected)
  - Consider grouping similar goals

- [X] Update success UI
  - Design and implement success state after saving plan
  - Add animations for better feedback
  - Consider what happens after success (redirect? show new content?)

- [ ] Solve for "Focus Areas"
  - Currently showing placeholder content
  - Need to determine what data to show
  - Design and implement visualization
  - Consider how focus areas relate to persona type

## Future Improvements
- [ ] Add loading states for recommendations
- [ ] Improve error handling
- [ ] Add analytics tracking
- [ ] Implement save/resume functionality
- [ ] Add print/export plan option 