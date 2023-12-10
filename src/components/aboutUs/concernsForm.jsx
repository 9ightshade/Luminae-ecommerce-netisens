export const Concerns = () => {
    return (
      <div className="bg-[#262626]">
        <h1
          className="color: #FFF;
font-feature-settings: 'clig' off, 'liga' off;

/* 32 Bold */
font-family: Lato;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 20p"
        >
          Tell us about your <span>Concerns</span>
        </h1>
        <form action="" method="post">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter Your Name here" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Your Email here" id="email" />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Tell us about your concerns"
          ></textarea>

          <input type="button" value="SEND" className="block" />
        </form>
      </div>
    );
}