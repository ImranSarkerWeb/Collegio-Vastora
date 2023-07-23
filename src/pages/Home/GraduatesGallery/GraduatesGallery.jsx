const GraduatesGallery = () => {
  const imageLink = [
    "https://thegirlsguidetolawschool.com/wp-content/uploads/2016/10/shutterstock_86361118-e1476375837826.jpg",
    "https://img.freepik.com/premium-photo/students-library-studying-together-discussion-exam-research-project-education-teamwork-diversity-young-men-women-study-group-learning-with-collaboration-campus_590464-188328.jpg",
    "https://i.pinimg.com/originals/6b/43/98/6b439830b1d534205e274587f51cddbb.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSht7lS6kAxPLnlxzfz_MVImdlbLH3he-6rGQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKxjL4zT_AOyUFZuTyMsrCr79iOZ-u2pstA&usqp=CAU",
    "https://i.pinimg.com/736x/45/24/5c/45245c24737598eae3a73b2bd49dbbfc.jpg",
    "https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/2020-11/collegestudentsstudying.jpg",
    "https://ounews.co/wp-content/uploads/2018/10/shutterstock_402458263.jpg",
    "https://s35691.pcdn.co/wp-content/uploads/2019/07/office-hours-off-campus.jpg",
    "https://assets.isu.pub/document-structure/230512160457-362ac217688a5412909a9cd53226e64c/v1/9c7351da3b7f2d69da448567efead499.jpeg",
    "https://i.pinimg.com/originals/6b/43/98/6b439830b1d534205e274587f51cddbb.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSht7lS6kAxPLnlxzfz_MVImdlbLH3he-6rGQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKxjL4zT_AOyUFZuTyMsrCr79iOZ-u2pstA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrvFAi0lU-LFq2cOpLBHHo1nbsJcfRX65HA&usqp=CAU",
    "https://st.depositphotos.com/2325841/3474/i/600/depositphotos_34745799-stock-photo-smiling-college-students-sitting-together.jpg",
  ];
  return (
    <div className="mb-20">
      <h1 className="text-4xl font-semibold text-center mb-10">
        College graduates group
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-5">
        {imageLink.map((img, idx) => (
          <img
            className="w-32 h-20 md:w-96 md:h-48 hover:opacity-75"
            key={idx}
            src={img}
          />
        ))}
      </div>
    </div>
  );
};

export default GraduatesGallery;
