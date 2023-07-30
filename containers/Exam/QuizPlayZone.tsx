import Icon from '@ant-design/icons/lib/components/Icon';
import { IconCheckCircle, IconChoiceCircle, IconCloseCircle } from '@ui/Svgs';
import React, { useEffect, useState } from 'react';
import Hint from './Hint';
import QuizPlayItem from './QuizPlayItem';

type QuizPlayZoneProps = {
  userAnswer: string[];
  answer: {
    texts: string[];
    choices: string[];
    image?: string;
    sound?: string;
    hint: string;
  };
  onChoice?: (choice) => void;
};
export default function QuizPlayZone(props: QuizPlayZoneProps) {
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    let data = [
      {
        text: '(A)',
        isChecked: false,
        isAnswer: false,
      },
      {
        text: '(B)',
        isChecked: false,
        isAnswer: false,
      },
      {
        text: '(C)',
        isChecked: false,
        isAnswer: false,
      },
      {
        text: '(D)',
        isChecked: false,
        isAnswer: false,
      },
    ];

    data = data.map((choice) => {
      let _choice = choice;
      if (props?.answer?.texts?.includes(choice.text)) {
        _choice = {
          ..._choice,
          isAnswer: true,
        };
      }
      if (props?.userAnswer?.includes(choice.text)) {
        _choice = {
          ..._choice,
          isChecked: true,
        };
      }

      return _choice;
    });
    setChoices(data);
  }, [props.userAnswer, props.answer]);

  const onChoice = (choice) => {
    if (props?.userAnswer?.length > 0) {
      return;
    }
    props.onChoice(choice.text);
  };

  return (
    <div className="game-object-quiz-playzone">
      <div className="game-object-quiz-choices">
        {choices.length > 0 &&
          choices.map((choice) => (
            <>
              <QuizPlayItem
                choice={choice}
                onChoice={onChoice}
                key={choice.text}
                isSelected={props?.userAnswer?.length > 0}
              />
              {props?.userAnswer?.length > 0 && choice?.isAnswer && (
                <Hint hint={props?.answer?.hint} />
              )}
            </>
          ))}
      </div>
    </div>
  );
}
