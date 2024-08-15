import { Rating } from "@smastrom/react-rating";

function Ratings({count}) {
    console.log(count)
    return (
        <div>
            <Rating
                style={{ maxWidth: 180 }}
                value={count}
                readOnly
            />
        </div>
    );
}

export default Ratings;