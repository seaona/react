import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Food() {
  const { name } = useParams();
  const url = `https://source.unsplash.com/1600x900/?${name}`;
  
  // Get the navigate function from the hook
  const navigate = useNavigate();

  // If there is a numeric digit, redirect to /
  useEffect(() => {
    if (/\d/.test(name)) {
      navigate("/", { replace: true });
    }
  }, [name, navigate]);

  return (
    <div className="Food">
      {/\d/.test(name) ? 
        null :
        <div>
          <h1>I love to eat {name}</h1>
          <img src={url} alt={name} />
        </div>
      }
    </div>
  );
}

export default Food;
