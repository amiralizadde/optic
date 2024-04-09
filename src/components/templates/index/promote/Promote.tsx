import React from "react";
import styles from "./promote.module.css";
import Image from "next/image";

const Promote = () => {
  return (
    <div>
      {/* top */}
      <section className={styles.topPromote}>
        <div className={styles.topPromote__textContent}>
          <p>It's time to upgrade your products...</p>
          <p>
            Our quality, experience and knowledge are the reason for your trust.
          </p>
        </div>
        <div className={styles.topPromote__boxes}>
          <div className={styles.topPromote__box}>
            <p> The latest technology in the world </p>
            <p>
              Simplification of processes, improvement and optimal management of
              new management solutions
            </p>
          </div>

          <div className={styles.topPromote__box}>
            <p> 24 hour support unit </p>
            <p>
              Providing product life insurance for the first time in Iran, an
              integrated service and product support system
            </p>
          </div>
          <div className={styles.topPromote__box}>
            <p> Sharing knowledge and expertise </p>
            <p>
              Educating customers to choose a quality product, holding
              specialized seminars on Telemetry software
            </p>
          </div>
        </div>
      </section>

      {/* middlel */}
      <section>
        <div className={styles.midPromote}>
          <div>
            <Image
              src="/assets/index-header.jpg"
              width={1000}
              height={500}
              alt="img compony"
              className="w-[full] h-[60vw] lg:h-[35vw] object-cover"
            />
          </div>
          <div className={styles.midPromote__aboutCompany}>
            <p> About Company Name </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              corporis vero nostrum ex vel nesciunt, magni error nobis officia,
              quos reprehenderit pariatur tempore explicabo ad, ratione tempora
              esse eveniet quaerat non. Voluptatibus ad harum praesentium
              numquam reprehenderit est omnis! Veniam possimus aliquam provident
              <br />
              distinctio consequuntur, libero aut voluptates amet minus
              laudantium fugiat accusantium! Error repudiandae dignissimos
              repellendus quasi, eligendi veritatis quae nam in aliquam sed
              laboriosam maxime fugiat earum. Pariatur culpa obcaecati neque,
              assumenda quis iste aut omnis. Vel, at?
            </p>
          </div>
        </div>
      </section>

      {/* _latest_ */}
      <section>
      <div className={styles.latestPromote}>
         
          <div className={styles.latestPromote__aboutCompany}>
            <p> About Company Name </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              corporis vero nostrum ex vel nesciunt, magni error nobis officia,
              quos reprehenderit pariatur tempore explicabo ad, ratione tempora
              esse eveniet quaerat non. Voluptatibus ad harum praesentium
              numquam reprehenderit est omnis! Veniam possimus aliquam provident
              <br />
              distinctio consequuntur, libero aut voluptates amet minus
              laudantium fugiat accusantium! Error repudiandae dignissimos
              repellendus quasi, eligendi veritatis quae nam in aliquam sed
              laboriosam maxime fugiat earum. Pariatur culpa obcaecati neque,
              assumenda quis iste aut omnis. Vel, at?
            </p>
          </div>
          <div>
            <Image
              src="/assets/index-header.jpg"
              width={1000}
              height={500}
              alt="img compony"
              className="w-[full] h-[60vw] lg:h-[35vw] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promote;
