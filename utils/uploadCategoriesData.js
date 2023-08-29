import Category from "../models/category.model.js";

const uploadCategoriesData = () => {
  const cats = [
    {
      name: "Graphic Design",
      value: "design",
      coverImg:
        "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1692171288/fiverr/category%20images/graphic_design_mxcyag.jpg",
      icon: "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1693277301/fiverr/category%20images/icons/graphic-design_cyuexi.svg",
    },
    {
      name: "Web Development",
      value: "web",
      coverImg:
        "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1692171288/fiverr/category%20images/web_dev_wxmdrd.jpg",
      icon: "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1693277302/fiverr/category%20images/icons/web-dev_ylawiw.svg",
    },
    {
      name: "Animation",
      value: "animation",
      coverImg:
        "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1692171287/fiverr/category%20images/animation_r9ce3z.jpg",
      icon: "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1693277302/fiverr/category%20images/icons/animation_fyos7k.svg",
    },
    {
      name: "Music",
      value: "music",
      coverImg:
        "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1692171288/fiverr/category%20images/music_ejbfwl.jpg",
      icon: "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1693277302/fiverr/category%20images/icons/music_eyzrwm.svg",
    },
    {
      name: "AI Services",
      value: "ai",
      coverImg:
        "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1692171288/fiverr/category%20images/ai_hre3hp.jpg",
      icon: "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1693277300/fiverr/category%20images/icons/ai_yfls8p.svg",
    },
    {
      name: "Logo Design",
      value: "logo",
      coverImg:
        "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1692171287/fiverr/category%20images/logo_uhjlfc.jpg",
      icon: "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1693277301/fiverr/category%20images/icons/logo_eqzidw.svg",
    },
    {
      name: "Social Media",
      value: "social",
      coverImg:
        "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1692171288/fiverr/category%20images/social_media_ra4pfn.jpg",
      icon: "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1693277301/fiverr/category%20images/icons/social-media_pf5xow.svg",
    },
    {
      name: "SEO",
      value: "seo",
      coverImg:
        "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1692171287/fiverr/category%20images/seo_agyuib.jpg",
      icon: "https://res.cloudinary.com/dqzkzo4lz/image/upload/v1693277300/fiverr/category%20images/icons/seo_m6qxzp.svg",
    },
  ];

  for (const item of cats) {
    console.log(item);
    const newCat = new Category(item);
    try {
      // const savedCat = newCat.save();
    } catch (error) {
      next(error);
    }
  }
};

export default uploadCategoriesData;
