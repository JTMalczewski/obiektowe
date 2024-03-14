program randomNumbers;
uses crt, sysutils;

var
        arr: array[0 .. 100000] of integer;
        i, j, temp: integer;


begin
        randomize;
        for i := 0 to StrToInt(ParamStr(1)) do
               begin
                      arr[i] := random(StrToInt(ParamStr(3)))+StrToInt(ParamStr(2));
              end;
        for i := 0 to StrToInt(ParamStr(1)) do
              begin
                      for j := 0 to StrToInt(ParamStr(1))-1 do
                              begin
                                      if arr[j] > arr[j+1] then
                                              begin
                                                      temp := arr[j];
                                                      arr[j] := arr[j+1];
                                                      arr[j+1] := temp;
                                              end;
                              end;
              end;
        for i:= 0 to StrToInt(ParamStr(1)) do
              begin
                      writeln(arr[i]);
              end;

end.