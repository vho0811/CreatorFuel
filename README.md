# CreatorFuel

CreatorFuel is a comprehensive content management system built for creators to manage and monetize their digital content. Built with Next.js, Sanity.io, and TypeScript, it provides a robust platform for content creators to manage various types of content and engage with their audience.

## Features

- **Multi-Content Support**: Manage blogs, courses, podcasts, videos, newsletters, and more
- **Tiered Content Access**: Implement subscription-based content access with different tiers
- **Responsive Design**: Beautiful, mobile-first UI built with Tailwind CSS
- **Real-time Updates**: Instant content updates with Sanity.io integration
- **Type Safety**: Full TypeScript implementation for robust development
- **SEO Optimized**: Built-in SEO features for better content discoverability
- **Analytics Ready**: Track content performance and user engagement
- **Subscription Management**: Handle user subscriptions and access control
- **Community Features**: Forums, comments, and user interactions
- **Monetization Tools**: Support for various revenue streams (subscriptions, donations, marketplace)

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Authentication**: NextAuth.js
- **Database**: MongoDB
- **Deployment**: Vercel

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/vho0811/CreatorFuel.git
cd CreatorFuel
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with the following variables:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to see the application

## Project Structure

```
creatorfuel/
├── app/                 # Next.js app directory
├── components/          # Reusable React components
├── lib/                 # Utility functions and configurations
├── public/             # Static assets
└── schemas/            # Sanity.io content schemas
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support, please open an issue in the GitHub repository.
